# About Preset 
vue3 + typescript + eslit + prettify

* prettify code on save

# About Vue Cli Project
## MODE
VUE CLI PROJECT has three modes:
* development
* test
* production

### .env files
| mode | notation |
| -- | -- |
| .env | will loaded in all modes |
| .env.[mode] | will loaded in corresponding mode |
| .env.local | will loaded in all modes but ignored by git |

### env variables
defined env variables
* REPO_NAME
* OUTPUT_TITLE
* OUTPUT_EXTISION

so output file will be `REPO_NAME + OUTPUT_EXTISION`

### global variables
* the variables defined in .env* files which start with `VUE_APP_*` will be passing to webpack.DefinePlugin
* accessing with `process.env.VUE_APP_*`

defined global variables
* `VUE_APP_LOCAL`
  * value: 1
  * only exsit in local server

## PATH ALIAS
`@` is alias to `/src`

# TODO
* should manually cpy .env files