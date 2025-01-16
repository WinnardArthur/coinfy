# coinfy

![NPM Version](https://img.shields.io/npm/v/coinfy?style=flat&labelColor=gray&color=%234CBB17)

A CLI tool for querying crypto coins information

## Usage
```bash
npm install -g coinfy
```

After installing it, you can run the commands below.

#### `coinfy [options]`

| Option | Description | Example |
|--------|-------------|---------|
| `-h, --help` | Show help and usage information | `coinfy --help` |
| `-v, --version` | Show coinfy version | `coinfy --version` |

<br/>

#### `coinfy [command]`
| Command | Description | Example |
|---------|-------------|---------|
| `key`   | Make changes to apikey (set, show or remove) | `coinfy key [key command]`|
| `check` | Check/Display the information of a coin | `coinfy check [check command]` |

<br />

#### `coinfy key [command]`
| Command | Description | Example |
|---------|-------------|---------|
| `set`   | Set API Key <br/>*To get API key, visit [coinmarketcap](https://coinmarketcap.com)* | `coinfy key set <apikey>`|
| `show` | Show API key | `coinfy key show` |
| `remove` | Remove API key | `coinfy key remove` |

<br /> 

#### `coinfy check [command]`
| Command | Description | Example |
|---------|-------------|---------|
| `price` | Check price information | `coinfy check price [options]`|
| __Options__ |         |         |
| `--cur` | Specify currency (Eg: EUR). Default is USD | `coinfy check price --cur=EUR`|
| `--coin` | Specify coin. Multiple coins should be comma separated (Eg: ETH,BTC). Default is BTC,ETH,XRP | `coinfy check price --coin=ETH,BTC`|

## Features
- **Real-Time Pricing:** Fetch the latest prices for popular cryptocurrencies like Bitcoin, Ethereum, and more.
- **Simple Commands:** Get data with intuitive and straightforward commands.
- **Lightweight & Fast:** Designed for speed and simplicity without unnecessary bloat.

## Contributing
Contributions are welcome!
Feel free to submit issues and pull requests to [GitHub](https://github.com/WinnardArthur/coinfy)

## Licencse
The project is licensed under the MIT License.

## Support
If you encounter any issues or have questions, feel free to [open an issue](https://github.com/WinnardArthur/coinfy/issues) or email me at [winnardarthur7@gmail.com](mailto:winnardarthur7@gmail.com)

## Downloads
- [Windows](https://github.com/WinnardArthur/coinfy/releases/download/v1.0.3/coinfy-win.zip)
- [macOS](https://github.com/WinnardArthur/coinfy/releases/download/v1.0.3/coinfy-macos.zip)
- [Linux](https://github.com/WinnardArthur/coinfy/releases/download/v1.0.3/coinfy-linux.zip)





