<?php
    $reception=$_GET['q'];
    $data=JSON_decode($reception);
    $msg="";

    $servername = "localhost";  
    $username = "root";  
    $password = "123456";  
    $db="rs";
    // 创建连接  
    $conn = mysqli_connect($servername, $username, $password,$db);  
    // 检测连接  
    if (!$conn) {  
        die("Connection failed: " . mysqli_connect_error());  
    }
    $conn->query("set character set 'utf8'");
    //读库
    if ($data[4]!="")
        $sql="update rs.book set score = (score*0.9 + " . $data[4] . "* 0.1) where bookname = '" . $data[3] ."'";
    $conn->query($sql);
    if($data[0]=="大一"){
        $sql="select bookname,score,(borrow+2*renew+3*score)as weight from(select bookname, count(case when status = '借书'or status='预借借出' then 1 end) as borrow,count(case when status = '续借' then 1 end)as renew,score from (select book.bookname as bookname, record.status as status, book.score as score, record.readerid as readerid, record.college as college FROM rs.record, rs.book where rs.book.bookname=rs.record.bookname) as res where readerid like '%2018%' and college like '" . $data[1] . "' and bookname like '%" . $data[2] . "%' group by bookName) ret order by weight desc limit 0,10;";
    }
    elseif ($data[0] == "大二"){
        $sql="select bookname,score,(borrow+2*renew+3*score)as weight from(select bookname, count(case when status = '借书'or status='预借借出' then 1 end) as borrow,count(case when status = '续借' then 1 end)as renew,score from (select book.bookname as bookname, record.status as status, book.score as score, record.readerid as readerid, record.college as college FROM rs.record, rs.book where rs.book.bookname=rs.record.bookname) as res where readerid like '%2017%' and college like '" . $data[1] . "' and bookname like '%" . $data[2] . "%' group by bookName) ret order by weight desc limit 0,10;";
    }
    else {
        $sql="select bookname,score,(borrow+2*renew+3*score)as weight from(select bookname, count(case when status = '借书'or status='预借借出' then 1 end) as borrow,count(case when status = '续借' then 1 end)as renew,score from (select book.bookname as bookname, record.status as status, book.score as score, record.readerid as readerid, record.college as college FROM rs.record, rs.book where rs.book.bookname=rs.record.bookname) as res where college like '" . $data[1] . "' and bookname like '%" . $data[2] . "%' group by bookName) ret order by weight desc limit 0,10;";
    }
    $res=$conn->query($sql);
    $i=1;
    if ($res->num_rows > 0) {
    // 输出每行数据
        while($row = $res->fetch_assoc()) {
            $msg .= "<li>" . $row["bookname"] . "<select id='score" . $i ."'><option></option><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select><button id='scoreBtn' onclick='score" . $i . "()'>评分</button>" . "</li>";
            $i+=1;
        }
        echo $msg;
    } else {
        echo "0 result";
    }
?>