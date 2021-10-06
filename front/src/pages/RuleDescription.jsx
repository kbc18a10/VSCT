import React from 'react';
import Rule from "../image/Rule.png"

const RuleDescription = () => {
    return (
        <div className="RuleDescription"> 
            <h1><img src={Rule} width="400" height="150"/></h1>
            <h2>GAME</h2>
            <p>〇タイルの無い場所をクリックします。</p>
            <p> クリックした場所から上下左右でそれぞれ一番近いタイルの中に、同じ色の組み合わせがあればスコアが加算されます。</p>
            <p>〇同じ色の組み合わせの無いところをクリックした場合－５点</p>
            <p>〇1つのタイルが1点</p>
            <p>〇動物タイルは5点</p>
            <h2>MATCH</h2>
                <p>〇シングルプレイかマルチプレイか選択する。</p>
                <p>〇ロビー画面下でユーザー名が設定できるよ</p>
        </div>
    );
}

export default RuleDescription