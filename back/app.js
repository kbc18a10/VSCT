// express モジュールのインスタンス作成
const express = require('express')
const app = express()

// パス指定用モジュール
const path = require('path');

const port = process.env.PORT || 3001

//静的ファイルのルーティング
app.use(express.static(path.join(__dirname, '../front/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'../front/build/index.html'));
});

// その他のリクエストに対する404エラー
app.use((req, res) => {
  res.sendStatus(404);
});


app.listen(port, () => {
    console.log(`listening on *:${port}`);
  })
  