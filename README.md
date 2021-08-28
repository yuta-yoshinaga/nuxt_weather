# nuxt_weather
Nuxt.jsで作成した天気予報取得アプリ

## Description

- 天気予報情報を外部APIから取得して画面に表示させる。
- 天気予報を取得する都道府県、地域を選択して取得ボタンを押すと外部APIを呼び出して取得する。
- 天気予報を取得する都道府県をプルダウンメニューから選択したら地域プルダウンメニューの内容を都道府県配下の地域に置き換え、未選択状態にする。
- 取得ボタンは都道府県、地域が未選択中には押せないようにする。
- 取得ボタンは外部API呼び出し中はローディング表示を行い、取得が終わるまではボタンを押せないようにする。
- 外部API呼び出しに失敗した場合はエラーメッセージを画面に表示させる。

## Notes
[tsukumijima](https://github.com/tsukumijima)さんの[天気予報 API（livedoor 天気互換）](https://weather.tsukumijima.net/)を利用させていただきました。
2020年夏に突然サービスが終了してしまった「livedoor 天気」というサービスの互換APIを提供してくださっています。
この記事をお読みの方で、この記事に沿って動作確認アプリケーションを開発される方は事前に必ず、上記ページの注意事項を良く確認してから本記事の内容に沿って実装をするようにしてください。
※[tsukumijima](https://github.com/tsukumijima)さん 便利なAPIを無料で公開していただき誠にありがとうございます。

## Usage
### Install
```sh
git clone https://github.com/yuta-yoshinaga/nuxt_weather.git
cd nuxt_weather
docker-compose up -d
```

### Deploy
![herokubutton](https://www.herokucdn.com/deploy/button.svg)  
[Heroku](https://nuxt-weather-yy.herokuapp.com/)

## Future Releases
Vue3に対応させたい。

## Contribution
1. Fork it
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create new Pull Request

## License
[MIT](LICENSE)