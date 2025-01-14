# coinfy

[![npm version](https://badge.fury.io/js/coinfy.svg)](https://badge.fury.io/js/coinfy)  
A CLI tool for querying crypto coins information

## To install the CLI globally, run:
```bash
npm install -g coinfy
```

Once installed, you can use the CLI with the commands below.

## Run the CLI
### `coinfy [options]`

| Option | Description | Example |
|--------|-------------|---------|
| `-h, --help` | Show help and usage information | `coinfy --help` |
| `-v, --version` | Show coinfy version | `coinfy --version` |

### `coinfy [command]`
| Command | Description | Example |
|---------|-------------|---------|
| `key`   | Make changes to apikey (set, show or remove) | `coinfy key [key command]`|
| `check` | Check/Display the information of a coin | `coinfy check [check command]` |

### `coinfy key [command]`
| Command | Description | Example |
|---------|-------------|---------|
| `set`   | Set API Key <br/>*To get API key, visit [coinmarketcap](https://coinmarketcap.com)* | `coinfy key set <apikey>`|
| `show` | Show API key | `coinfy key show` |
| `remove` | Remove API key | `coinfy key remove` |

### `coinfy check [command]`
| Command | Description | Example |
|---------|-------------|---------|
| `price` | Check price information | `coinfy check price [options]`|
| __Options__ |         |         |
| `--cur` | Specify currency (Eg: EUR). Default is USD | `coinfy check price --cur=EUR`|
| `--coin` | Specify coin. Multiple coins should be comma separated (Eg: ETH,BTC). Default is BTC,ETH,XRP | `coinfy check price --coin=ETH,BTC`|

## Features
+ <b>Lightweight: </b>Easy to install and quick to run.
+ **Flexible:** Supports various options for different use cases.
+ __Efficient:__ Simplifies tasks and improves workflow.

## Contributing
Contributions are welcome!
Feel free to submit issues and pull requests to [GitHub](https://github.com/WinnardArthur/coinfy)

## Licencse
The project is licensed under the MIT License.

## Support
If you encounter any issues or have questions, feel free to [open an issue](https://github.com/WinnardArthur/coinfy/issues) or email me at [winnardarthur7@gmail.com](mailto:winnardarthur7@gmail.com)





