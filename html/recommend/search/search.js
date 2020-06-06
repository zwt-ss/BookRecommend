window.onload = function () {
  var grade = ["--年级--", "大一", "大二"];
  var html2 = "";
  for (var i = 0; i < 3; i++) {
    html2 += "<option>" + grade[i] + "</option>";
  }
  document.getElementById("grade").innerHTML = html2;
};

function sendMSG(msg) {
  if (window.XMLHttpRequest) {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行的代码
    xmlhttp = new XMLHttpRequest();
  } else {
    //IE6, IE5 浏览器执行的代码
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById("result").innerHTML = xmlhttp.responseText;
    }
  };
  xmlhttp.open("GET", "search/search.php?q=" + JSON.stringify(msg), true);
  xmlhttp.send();
}

function btn() {
  var input = document.getElementById("input"); //获取输入框元素
  var sg = document.getElementById("grade"); //获取tag
  var ig = sg.selectedIndex;
  var sc = document.getElementById("college"); //获取college
  var ic = sc.selectedIndex;
  var data=[];
  data.push(sg.options[ig].text);
  data.push(sc.options[ic].text);
  data.push(input.value.split("").join("%"));
  data.push("null");
  data.push(0)
  console.log(JSON.stringify(data));
  // $.ajax({
  //   dataType: "json",
  //   type: "GET",
  //   url: "search/search.php",
  //   data: JSON.stringify(data),
  //   timeout: 2000,
  //   success: function (data) {
  //     console.log("get data success");
  //     document.getElementById("result").innerHTML = data;
  //   },
  //   error: function () {
  //     console.log("false");
  //   }
    
  // });
  sendMSG(data);
}

function score1() {
  var input = document.getElementById("input"); //获取输入框元素
  var score = document.getElementById("score1");
  console.log(score);
  var book = score.parentNode;
  console.log(book.textContent.split(0)[0]);
  var is = score.selectedIndex;
  var sg = document.getElementById("grade"); //获取tag
  var ig = sg.selectedIndex;
  var sc = document.getElementById("college"); //获取college
  var ic = sc.selectedIndex;
  var data = [];
  data.push(sg.options[ig].text);
  data.push(sc.options[ic].text);
  data.push(input.value.split("").join("%"));
  data.push(book.textContent.split(0)[0]);
  data.push(Number(score.options[is].text));
  console.log(JSON.stringify(data));
  sendMSG(data);
}
function score2() {
  var input = document.getElementById("input"); //获取输入框元素
  var score = document.getElementById("score2");
  console.log(score);
  var book = score.parentNode;
  console.log(book.textContent.split(0)[0]);
  var is = score.selectedIndex;
  var sg = document.getElementById("grade"); //获取tag
  var ig = sg.selectedIndex;
  var sc = document.getElementById("college"); //获取college
  var ic = sc.selectedIndex;
  var data = [];
  data.push(sg.options[ig].text);
  data.push(sc.options[ic].text);
  data.push(input.value.split("").join("%"));
  data.push(book.textContent.split(0)[0]);
  data.push(Number(score.options[is].text));
  console.log(JSON.stringify(data));
  sendMSG(data);
}
function score3() {
  var input = document.getElementById("input"); //获取输入框元素
  var score = document.getElementById("score3");
  console.log(score);
  var book = score.parentNode;
  console.log(book.textContent.split(0)[0]);
  var is = score.selectedIndex;
  var sg = document.getElementById("grade"); //获取tag
  var ig = sg.selectedIndex;
  var sc = document.getElementById("college"); //获取college
  var ic = sc.selectedIndex;
  var data = [];
  data.push(sg.options[ig].text);
  data.push(sc.options[ic].text);
  data.push(input.value.split("").join("%"));
  data.push(book.textContent.split(0)[0]);
  data.push(Number(score.options[is].text));
  console.log(JSON.stringify(data));
  sendMSG(data);
}
function score4() {
  var input = document.getElementById("input"); //获取输入框元素
  var score = document.getElementById("score4");
  console.log(score);
  var book = score.parentNode;
  console.log(book.textContent.split(0)[0]);
  var is = score.selectedIndex;
  var sg = document.getElementById("grade"); //获取tag
  var ig = sg.selectedIndex;
  var sc = document.getElementById("college"); //获取college
  var ic = sc.selectedIndex;
  var data = [];
  data.push(sg.options[ig].text);
  data.push(sc.options[ic].text);
  data.push(input.value.split("").join("%"));
  data.push(book.textContent.split(0)[0]);
  data.push(Number(score.options[is].text));
  console.log(JSON.stringify(data));
  sendMSG(data);
}
function score5() {
  var input = document.getElementById("input"); //获取输入框元素
  var score = document.getElementById("score5");
  console.log(score);
  var book = score.parentNode;
  console.log(book.textContent.split(0)[0]);
  var is = score.selectedIndex;
  var sg = document.getElementById("grade"); //获取tag
  var ig = sg.selectedIndex;
  var sc = document.getElementById("college"); //获取college
  var ic = sc.selectedIndex;
  var data = [];
  data.push(sg.options[ig].text);
  data.push(sc.options[ic].text);
  data.push(input.value.split("").join("%"));
  data.push(book.textContent.split(0)[0]);
  data.push(Number(score.options[is].text));
  console.log(JSON.stringify(data));
  sendMSG(data);
}
function score6() {
  var input = document.getElementById("input"); //获取输入框元素
  var score = document.getElementById("score6");
  console.log(score);
  var book = score.parentNode;
  console.log(book.textContent.split(0)[0]);
  var is = score.selectedIndex;
  var sg = document.getElementById("grade"); //获取tag
  var ig = sg.selectedIndex;
  var sc = document.getElementById("college"); //获取college
  var ic = sc.selectedIndex;
  var data = [];
  data.push(sg.options[ig].text);
  data.push(sc.options[ic].text);
  data.push(input.value.split("").join("%"));
  data.push(book.textContent.split(0)[0]);
  data.push(Number(score.options[is].text));
  console.log(JSON.stringify(data));
  sendMSG(data);
}
function score7() {
  var input = document.getElementById("input"); //获取输入框元素
  var score = document.getElementById("score7");
  console.log(score);
  var book = score.parentNode;
  console.log(book.textContent.split(0)[0]);
  var is = score.selectedIndex;
  var sg = document.getElementById("grade"); //获取tag
  var ig = sg.selectedIndex;
  var sc = document.getElementById("college"); //获取college
  var ic = sc.selectedIndex;
  var data = [];
  data.push(sg.options[ig].text);
  data.push(sc.options[ic].text);
  data.push(input.value.split("").join("%"));
  data.push(book.textContent.split(0)[0]);
  data.push(Number(score.options[is].text));
  console.log(JSON.stringify(data));
  sendMSG(data);
}
function score8() {
  var input = document.getElementById("input"); //获取输入框元素
  var score = document.getElementById("score8");
  console.log(score);
  var book = score.parentNode;
  console.log(book.textContent.split(0)[0]);
  var is = score.selectedIndex;
  var sg = document.getElementById("grade"); //获取tag
  var ig = sg.selectedIndex;
  var sc = document.getElementById("college"); //获取college
  var ic = sc.selectedIndex;
  var data = [];
  data.push(sg.options[ig].text);
  data.push(sc.options[ic].text);
  data.push(input.value.split("").join("%"));
  data.push(book.textContent.split(0)[0]);
  data.push(Number(score.options[is].text));
  console.log(JSON.stringify(data));
  sendMSG(data);
}
function score9() {
  var input = document.getElementById("input"); //获取输入框元素
  var score = document.getElementById("score9");
  console.log(score);
  var book = score.parentNode;
  console.log(book.textContent.split(0)[0]);
  var is = score.selectedIndex;
  var sg = document.getElementById("grade"); //获取tag
  var ig = sg.selectedIndex;
  var sc = document.getElementById("college"); //获取college
  var ic = sc.selectedIndex;
  var data = [];
  data.push(sg.options[ig].text);
  data.push(sc.options[ic].text);
  data.push(input.value.split("").join("%"));
  data.push(book.textContent.split(0)[0]);
  data.push(Number(score.options[is].text));
  console.log(JSON.stringify(data));
  sendMSG(data);
}
function score10() {
  var input = document.getElementById("input"); //获取输入框元素
  var score = document.getElementById("score10");
  console.log(score);
  var book = score.parentNode;
  console.log(book.textContent.split(0)[0]);
  var is = score.selectedIndex;
  var sg = document.getElementById("grade"); //获取tag
  var ig = sg.selectedIndex;
  var sc = document.getElementById("college"); //获取college
  var ic = sc.selectedIndex;
  var data = [];
  data.push(sg.options[ig].text);
  data.push(sc.options[ic].text);
  data.push(input.value.split("").join("%"));
  data.push(book.textContent.split(0)[0]);
  data.push(Number(score.options[is].text));
  console.log(JSON.stringify(data));
  sendMSG(data);
}