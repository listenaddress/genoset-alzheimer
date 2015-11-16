## Information

<table>
<tr>
<td>Package</td><td>genoset-alzheimer</td>
</tr>
<tr>
<td>Description</td>
<td>Determines if a genome has an increased risk of Alzheimer's disease as per <a href="http://www.snpedia.com/index.php/Gs293">gs293</a>. If preventative action is taken to address the iron imbalance, it might be possible to reduce the risk of developing Alzheimer's disease for those with this genoset.</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.4</td>
</tr>
</table>

## Compatibility

This genoset is to be used with DNA-JSON. See the [dna2json](https://github.com/genomejs/dna2json) repository for more information.

## Usage

```javascript
var alzheimer = require('genoset-alzheimer');
var dna = require('./my-dna.json');

console.log(alzheimer(dna)); // true or false
```

## LICENSE

(MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.