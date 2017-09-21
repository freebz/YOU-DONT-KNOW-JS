var sq = ASQ(..).then(..).then(..);

var sq2 = sq.fork();

// 분기 1
sq.then(..)..;

// 분기 2
sq2.then(..)..;
