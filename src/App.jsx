import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./components/mainpage"; // Adjust the path as needed
import Question from "./components/questions"; // Adjust the path as needed

import Set_1 from "./components/question_data/set_1"; // Adjust the path as needed
import Answer from "./components/answer";
import AnswerList from "./components/question_data/answerList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/question" element={<Question />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/" element={<Mainpage />} />
        <Route
          path="/set1"
          element={
            <Set_1
              object="你很帅eh！/你很美eh"
              object2="谢谢，我也这样觉得"
              object3="等下要去吃mamak吗"
              object4="okay啊！我很饿哦！"
              object5="等下要吃什么？"
              object6="随便啦"
              object7="你觉得那一件衣服好看"
              object8="我觉得你穿的都好看"
              object9="去喝茶的时候waiter通常会问"
              object10="多少个人"
            />
          }
        />

        <Route
          path="/set1a"
          element={
            <AnswerList
              object2="谢谢，我也这样觉得"
              object4="okay啊！我很饿哦！"
              object6="随便啦"
              object8="我觉得你穿的都好看"
              object10="多少个人"
            />
          }
        />

        <Route
          path="/set2"
          element={
            <Set_1
              object="你知道现在几点吗？"
              object2="你不会自己看电话啊"
              object3="有人一直讲话的时候你会讲什么"
              object4="你要喝水吗"
              object5="上厕所之前要做什么？"
              object6="带tissue"
              object7="吃饭之前要做什么？"
              object8="先洗手"
              object9="去脚底按摩的时候你会说"
              object10="老板按大力一点"
            />
          }
        />

        <Route
          path="/set2a"
          element={
            <AnswerList
              object2="你不会自己看电话啊"
              object4="你要喝水吗"
              object6="带tissue"
              object8="先洗手"
              object10="老板按大力一点"
            />
          }
        />

        <Route
          path="/set3"
          element={
            <Set_1
              object="被狗追你会做什么"
              object2="哇 走开啊！"
              object3="看到有人撞车你会做什么？"
              object4="Hello ambulance"
              object5="看到坏人你会说？"
              object6="你不要过来啊！"
              object7="有人要跟你打架你会说"
              object8="来啊，怕你啊"
              object9="老板叫你OT你会说"
              object10="哇 又来"
            />
          }
        />

        <Route
          path="/set3a"
          element={
            <AnswerList
              object2="哇 走开啊！"
              object4="Hello ambulance"
              object6="你不要过来啊！"
              object8="来啊，怕你啊"
              object10="哇 又来"
            />
          }
        />

        <Route
          path="/set4"
          element={
            <Set_1
              object="比赛输了你会说"
              object2="我尽力了"
              object3="被人绑架要讲什么？"
              object4="救命啊"
              object5="起立，行礼"
              object6="老师早安"
              object7="猫怎么叫"
              object8="miaooooo"
              object9="很开心的时候你会说什么"
              object10="今天我请客"
            />
          }
        />

        <Route
          path="/set4a"
          element={
            <AnswerList
              object2="我尽力了"
              object4="救命啊"
              object6="老师早安"
              object8="miaooooo"
              object10="今天我请客"
            />
          }
        />

        <Route
          path="/set5"
          element={
            <Set_1
              object="你很生气的时候你会讲什么"
              object2="老虎不发威，你当我hello kitty?"
              object3="你回到家，第一句是什么？"
              object4="妈我很饿"
              object5="喝醉的人通常说什么"
              object6="我没醉"
              object7="你觉得给骗的时候你会说什么"
              object8="我读书少，你不要骗我"
              object9="求婚会说什么"
              object10="你愿意嫁给我吗"
            />
          }
        />

        <Route
          path="/set5a"
          element={
            <AnswerList
              object2="老虎不发威，你当我hello kitty?"
              object4="妈我很饿"
              object6="我没醉"
              object8="我读书少，你不要骗我"
              object10="你愿意嫁给我吗"
            />
          }
        />

        <Route
          path="/set6"
          element={
            <Set_1
              object="喝醉酒你会"
              object2="呕"
              object3="发烧了你会怎么办"
              object4="吃panadol"
              object5="梁朝伟拿着枪对刘德华说了什么"
              object6="对不起我是警察"
              object7="肚子痛你会"
              object8="上厕所"
              object9="手术失败后，医生会说什么"
              object10="对不起我已经尽力了"
            />
          }
        />

        <Route
          path="/set6a"
          element={
            <AnswerList
              object2="呕"
              object4="吃panadol"
              object6="对不起我是警察"
              object8="上厕所"
              object10="im fine thank you"
            />
          }
        />

        <Route
          path="/set7"
          element={
            <Set_1
              object="生病的时候，男朋友会叫你"
              object2="多喝热水"
              object3="离家出走的时候妈妈会跟你讲什么" // Optional, add more items if needed
              object4="你走了就不要回来"
              object5="Jian Zhi生日你会说"
              object6="Happy Birthday"
              object7="去奶茶店喝什么"
              object8="奶茶少糖"
              object9="去到泰国你会说"
              object10="Sawadikap"
            />
          }
        />

        <Route
          path="/set7a"
          element={
            <AnswerList
              object2="多喝热水"
              object4="多喝水"
              object6="Happy Birthday"
              object8="奶茶少糖"
              object10="Sawadikap"
            />
          }
        />

        <Route
          path="/set8"
          element={
            <Set_1
              object="拍结婚照的时候，摄影师会说"
              object2="放轻松，不要紧张"
              object3="天气热你会？"
              object4="开冷气"
              object5="妈妈最常讲的话"
              object6="热气啊！"
              object7="去理发店，发型师会说"
              object8="你要怎样剪"
              object9="妈妈生气的时候会说"
              object10="生块叉烧好过生你"
            />
          }
        />

        <Route
          path="/set8a"
          element={
            <AnswerList
              object2="放轻松，不要紧张"
              object4="开冷气"
              object6="热气啊！"
              object8="你要怎样剪"
              object10="生块叉烧好过生你"
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
