// 0xfa12b55d54e4b2ddab1b27473414e155901b918f
const express = require("express");
const ABI = require("./ABI.json");
const { Web3 } = require("web3");
const app = express();
const cors = require("cors");
//blockchain
const web3 = new Web3(
  "https://eth-sepolia.g.alchemy.com/v2/jxMVbeX716kEjhhmR35JWd8ArBDdLJjX"
);
const contractAddress = "0xfa12b55d54e4b2ddab1b27473414e155901b918f";
const PORT = 3000;
const contract = new web3.eth.Contract(ABI, contractAddress);

app.use(cors());
app.use(express.json());
//req
app.get("/etherum/api/view-task/:taskid", async (req, res) => {
  try {
    const { taskid } = req.params;
    console.log(taskid);
    const task = await contract.methods.viewTask(taskid).call();

    //convert bigInt to int
    const { id, content, date } = task;
    const numId = Number(id);
    const taskObj = {
      numId,
      content,
      date,
    };
    console.log(taskObj);

    res.status(200).json({ status: 200, taskObj, message: "task exist" });
  } catch (error) {
    res.status(500).json({ status: 500, messaage: error.message });
  }
});

app.get("/etherum/api/all-task", async (req, res) => {
  try {
    const List = await contract.methods.allTask().call();

    if (List.length > 0) {
      const TaskList = List.map(({ id, content, date }) => {
        taskid = Number(id);
        return { taskid, content, date };
      });
      res.status(200).json({ status: 200, TaskList, message: "list is here" });
    } else res.status(400).send("No task availible");
  } catch (error) {
    res.status(500).json({ staus: 500, message: error.message });
  }
});

app.post("/etherum/api/create-task", async (req, res) => {
  try {
    const List = await contract.methods.allTask().call();
    const { email } = req.body;
    let found = List.find((e) => email == e.date);
    console.log(email + "hello");
    if (found)
      res.status(409).json({ status: 409, message: "Email is present" });
    else res.status(200).json({ status: 200, message: "You Can proceed" });
  } catch (error) {
    res.status(500).json({ staus: 500, message: error.message });
  }
});

//server

app.listen(PORT, () => {
  console.log("app listening on port 3000");
});
