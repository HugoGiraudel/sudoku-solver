const Game = require('../src/core/Game')

// 17-clue Sudokus, which are the most difficult ones.
// Taken from: https://raw.githubusercontent.com/maxbergmark/sudoku-solver/master/data-sets/all_17_clue_sudokus.txt
const GRIDS = [
  '000000010400000000020000000000050407008000300001090000300400200050100000000806000',
  '000000010400000000020000000000050604008000300001090000300400200050100000000807000',
  '000000012000035000000600070700000300000400800100000000000120000080000040050000600',
  '000000012003600000000007000410020000000500300700000600280000040000300500000000000',
  '000000012008030000000000040120500000000004700060000000507000300000620000000100000',
  '000000012040050000000009000070600400000100000000000050000087500601000300200000000',
  '000000012050400000000000030700600400001000000000080000920000800000510700000003000',
  '000000012300000060000040000900000500000001070020000000000350400001400800060000000',
  '000000012400090000000000050070200000600000400000108000018000000000030700502000000',
  '000000012500008000000700000600120000700000450000030000030000800000500700020000000',
  '000000012700060000000000050080200000600000400000109000019000000000030800502000000',
  '000000012800040000000000060090200000700000400000501000015000000000030900602000000',
  '000000012980000000000600000100700080402000000000300600070000300050040000000010000',
  '000000013000030080070000000000206000030000900000010000600500204000400700100000000',
  '000000013000200000000000080000760200008000400010000000200000750600340000000008000',
  '000000013000500070000802000000400900107000000000000200890000050040000600000010000',
  '000000013000700060000508000000400800106000000000000200740000050020000400000010000',
  '000000013000700060000509000000400900106000000000000200740000050080000400000010000',
  '000000013000800070000502000000400900107000000000000200890000050040000600000010000',
  '000000013020500000000000000103000070000802000004000000000340500670000200000010000',
  '000000013040000080200060000609000400000800000000300000030100500000040706000000000',
  '000000013040000080200060000906000400000800000000300000030100500000040706000000000',
  '000000013040000090200070000607000400000300000000900000030100500000060807000000000',
  '000000013040000090200070000706000400000300000000900000030100500000060807000000000',
  '000000013200800000300000070000200600001000000040000000000401500680000200000070000',
  '000000013400200000600000000000460500010000007200500000000031000000000420080000000',
  '000000013400800000200000070000400900001000000060000000000501600380000200000070000',
  '000000014000000203800050000000207000031000000000000650600000700000140000000300000',
  '000000014000020000500000000010804000700000500000100000000050730004200000030000600',
  '000000014000708000000000000104005000000200830600000000500040000030000700000090001',
  '000000014008005000020000000000020705100000000000000800070000530600140000000200000',
  '000000014008005000020000000000020805100000000000000700070000530600140000000200000',
  '000000014008009000020000000000020805100000000000000700070000930600140000000200000',
  '000000014700000000000500000090014000050000720000600000000900805600000900100000000',
  '000000014790000000000200000000003605001000000000000200060000730200140000000800000',
  '000000014970000000000200000000003605001000000000000200060000730200140000000800000',
  '000000015000400070300060000800000200000104000400500000000023600010000000070000000',
  '000000015000400070400000000609000300000100800000700000500030200000060040010000000',
  '000000015000800070300000000408000300000100400000700000500040200000090060010000000',
  '000000015000800070400000000609000300000100800000700000500030200000060040010000000',
  '000000015000830000000000200023000800000001000080000000105040000000600720900000000',
  '000000015000830000000000200026000800000001000080000000105040000000300720900000000',
  '000000015000900070400000000608000300000100800000700000500030200000060040010000000',
  '000000015000900070400000000609000300000100800000700000500030200000060040010000000',
  '000000015000900080300000000704000300000100400000800000500040200000070060010000000',
  '000000015000900080400000000704000300000100900000800000500030200000070060010000000',
  '000000015020060000000000408003000900000100000000008000150400000000070300800000060',
  '000000015040080000000000300000040260500107000900000000300500000080000400000900000',
  '000000015300600000000000080600050200000001000000000040010200700000760300008000000',
]

GRIDS.slice(0, 1).forEach(grid => {
  const game = new Game(grid, { colors: true })

  game.render()
  game.solve()
  game.render()
  game.validate()
})