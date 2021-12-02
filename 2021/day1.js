let i = fs.readFileSync('input.txt')
let it = i.toString('utf-8')
let itl = it.split("\n")

/**
itl
[
  '137', '138', '139', '140', '143', '146', '147', '149',
  '155', '156', '159', '153', '163', '169', '175', '180',
  '183', '184', '206', '219', '226', '233', '231', '232',
  '234', '231', '234', '231', '234', '232', '230', '235',
  '225', '237', '245', '254', '263', '275', '288', '290',
...
]
*/

var itli = itl.map(v => parseInt(v, 10))

/**
> itli
[
  137, 138, 139, 140, 143, 146, 147, 149, 155, 156, 159, 153,
  163, 169, 175, 180, 183, 184, 206, 219, 226, 233, 231, 232,
  234, 231, 234, 231, 234, 232, 230, 235, 225, 237, 245, 254,
  263, 275, 288, 290, 291, 292, 316, 334, 343, 346, 359, 354,
  352, 374, 377, 378, 391, 409, 419, 427, 433, 437, 411, 416,
  435, 442, 438, 440, 443, 459, 460, 466, 467, 468, 467, 470,
  488, 493, 504, 505, 506, 517, 523, 526, 525, 532, 541, 558,
  559, 561, 563, 565, 582, 589, 595, 586, 571, 603, 607, 621,
  634, 642, 646, 648,
  ... 1901 more items
]
*/
let p = (prev,sign,next,res) => console.log(`${prev} ${sign} ${next} =>  ${res}`)

// last item in list was a NaN... sigh
itli = itli.slice(0,itli.length - 1)

// OK it is not a word, should have use SHALLOW instead of "GROUNDER" =)
let deeper = 0
let grounder = 0
let eq = 0
let prev = 137

itli.forEach((v,i) => { if(prev < v){ p(prev,'<',v, 'DEEPER')}; if(prev > v){ p(prev,'>',v, 'GROUNDER')}; if(prev == v){ p(prev,'==',v, 'EQ')};  prev = v})
itli.forEach((v,i) => { if(prev < v){ p(prev,'<',v, 'DEEPER'); deeper++}; if(prev > v){ p(prev,'>',v, 'GROUNDER'); grounder++}; if(prev == v){ p(prev,'==',v, 'EQ'); eq++};  prev = v})

// ----------------
// RESULT: deeper: 1711, grounder: 288, eq: 0
// ---------------

slider = []

// How many slices of 3 can we get?
// 3 => 1
// 4 => 2
// 5 => 3
// 10 => 8
// 100 => 98
// itli.lenght = 2000 => 1998
let numItterations = itli.length - 2

for(let i = 0; i< numItterations; i++) { console.log(i, '==', itli[i], itli[i+1], itli[i+2]); slider.push([itli[i],itli[i+1],itli[i+2]]) }

/**
slider
[
  [ 137, 138, 139 ], [ 138, 139, 140 ], [ 139, 140, 143 ], [ 140, 143, 146 ],
  [ 143, 146, 147 ], [ 146, 147, 149 ], [ 147, 149, 155 ], [ 149, 155, 156 ],
  [ 155, 156, 159 ], [ 156, 159, 153 ], [ 159, 153, 163 ], [ 153, 163, 169 ],
  [ 163, 169, 175 ], [ 169, 175, 180 ], [ 175, 180, 183 ], [ 180, 183, 184 ],
  [ 183, 184, 206 ], [ 184, 206, 219 ], [ 206, 219, 226 ], [ 219, 226, 233 ],
  [ 226, 233, 231 ], [ 233, 231, 232 ], [ 231, 232, 234 ], [ 232, 234, 231 ],
  [ 234, 231, 234 ], [ 231, 234, 231 ], [ 234, 231, 234 ], [ 231, 234, 232 ],
  [ 234, 232, 230 ], [ 232, 230, 235 ], [ 230, 235, 225 ], [ 235, 225, 237 ],
  [ 225, 237, 245 ], [ 237, 245, 254 ], [ 245, 254, 263 ], [ 254, 263, 275 ],
  [ 263, 275, 288 ], [ 275, 288, 290 ], [ 288, 290, 291 ], [ 290, 291, 292 ],
  [ 291, 292, 316 ], [ 292, 316, 334 ], [ 316, 334, 343 ], [ 334, 343, 346 ],
  [ 343, 346, 359 ], [ 346, 359, 354 ], [ 359, 354, 352 ], [ 354, 352, 374 ],
  [ 352, 374, 377 ], [ 374, 377, 378 ], [ 377, 378, 391 ], [ 378, 391, 409 ],
  [ 391, 409, 419 ], [ 409, 419, 427 ], [ 419, 427, 433 ], [ 427, 433, 437 ],
  [ 433, 437, 411 ], [ 437, 411, 416 ], [ 411, 416, 435 ], [ 416, 435, 442 ],
  [ 435, 442, 438 ], [ 442, 438, 440 ], [ 438, 440, 443 ], [ 440, 443, 459 ],
  [ 443, 459, 460 ], [ 459, 460, 466 ], [ 460, 466, 467 ], [ 466, 467, 468 ],
  [ 467, 468, 467 ], [ 468, 467, 470 ], [ 467, 470, 488 ], [ 470, 488, 493 ],
  [ 488, 493, 504 ], [ 493, 504, 505 ], [ 504, 505, 506 ], [ 505, 506, 517 ],
  [ 506, 517, 523 ], [ 517, 523, 526 ], [ 523, 526, 525 ], [ 526, 525, 532 ],
  [ 525, 532, 541 ], [ 532, 541, 558 ], [ 541, 558, 559 ], [ 558, 559, 561 ],
  [ 559, 561, 563 ], [ 561, 563, 565 ], [ 563, 565, 582 ], [ 565, 582, 589 ],
  [ 582, 589, 595 ], [ 589, 595, 586 ], [ 595, 586, 571 ], [ 586, 571, 603 ],
  [ 571, 603, 607 ], [ 603, 607, 621 ], [ 607, 621, 634 ], [ 621, 634, 642 ],
  [ 634, 642, 646 ], [ 642, 646, 648 ], [ 646, 648, 651 ], [ 648, 651, 685 ],
  ... 1898 more items
]
*/
sliderSum = []
sliderSum.forEach((v,i) => { if(prev < v){ p(prev,'<',v, 'DEEPER'); deeper++}; if(prev > v){ p(prev,'>',v, 'GROUNDER'); grounder++}; if(prev == v){ p(prev,'==',v, 'EQ'); eq++};  prev = v})

// RESULT
// > deeper
// 1743
// > grounder
// 238
// > eq
// 17