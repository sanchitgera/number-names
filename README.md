# Number-Names 
> Convert those long numbers into readable strings. A JS port of the awesome [Humanize](https://github.com/radar/humanize) gem. 

## Installation 

```bash
$ npm install number-names
```

## Usage 

The function takes in numbers as integers, strings or the scientific notation. 
```js
var n2w = require('number-names');

n2w(9023);
// nine thousand and twenty-three

n2w(192.93);
// one hundred and ninety-two point nine three

n2w('-121');
// negative one hundred and twenty-one

n2w('1.89e+10');
// eighteen billion and nine hundred million

```


...All the way up to 156 digits 

```js
n2w('444333222111999777666555444333222111999777666555444333221111112176514321007310444333222111999777666555444333222111999777666555444333221111112176514321007310');
// four hundred and forty-four quinquagintillion, three hundred and thirty-three novenquadragintillion, two hundred and twenty-two octoquadragintillion, one hundred and eleven septenquadragintillion, nine hundred and ninety-nine sesquadragintillion, seven hundred and seventy-seven quinquadragintillion, six hundred and sixty-six quattuorquadragintillion, five hundred and fifty-five trequadragintillion, four hundred and forty-four duoquadragintillion, three hundred and thirty-three unquadragintillion, two hundred and twenty-two quadragintillion, one hundred and eleven novemtrigintillion, nine hundred and ninety-nine octotrigintillion, seven hundred and seventy-seven septentrigintillion, six hundred and sixty-six sextrigintillion, five hundred and fifty-five quintrigintillion, four hundred and forty-four quattuortrigintillion, three hundred and thirty-three trestrigintillion, two hundred and twenty-one duotrigintillion, one hundred and eleven untrigintillion, one hundred and twelve trigintillion, one hundred and seventy-six novemvigintillion, five hundred and fourteen octovigintillion, three hundred and twenty-one septenvigintillion, seven sexvigintillion, three hundred and ten quinvigintillion, four hundred and forty-four quattuortillion, three hundred and thirty-three trevigintillion, two hundred and twenty-two duovigintillion, one hundred and eleven unvigintillion, nine hundred and ninety-nine vigintillion, seven hundred and seventy-seven novemdecillion, six hundred and sixty-six octodecillion, five hundred and fifty-five septendecillion, four hundred and forty-four sexdecillion, three hundred and thirty-three quindecillion, two hundred and twenty-two quattuordecillion, one hundred and eleven tredecillion, nine hundred and ninety-nine duodecillion, seven hundred and seventy-seven undecillion, six hundred and sixty-six decillion, five hundred and fifty-five nonillion, four hundred and forty-four octillion, three hundred and thirty-three septillion, two hundred and twenty-one sextillion, one hundred and eleven quintrillion, one hundred and twelve quadrillion, one hundred and seventy-six trillion, five hundred and fourteen billion, three hundred and twenty-one million, seven thousand, three hundred and ten
```

**Note:** Numbers with more than 15 significant digits must be passed as strings in order to avoid losing precision. 

## Testing 
```bash
$ npm install 
$ npm test
```

## License 
MIT License. See License for more info. 
