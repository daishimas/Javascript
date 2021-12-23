## 本当に最初にやること
- gitをインストール
- VisualStuidioCodeでフォルダを開いてターミナルを開く
- git initコマンドでローカルリポジトリ作成

- コミットするときにusernameとかemailとかエラーが出たら・・・
- git config user.name 名前
- git config user.email メールアドレス
- コミットが成功したら「ブランチの発行」がでてくるのでクリック

## 作業を終えるとき
- ソース管理メニューから変更をステージング（＋を押す）する
- 問題なければコミットする（チェックマーク）
- コミットする際のコメントは必ず記入する
- 同期の変更をクリックするとgithubへプッシュされる

## PCを変えるとき（初回）
- VisualStuidioCodeで保存したいフォルダに移動してターミナルを開く
- ターミナルにgit clone コマンドを打つ
　git clone https://github.com/daishimas/Javascript.git
- そのままコーディングをする

## PCを変えるとき（2回目以降）
- VisualStuidioCodeでローカルリポジトリのあるフォルダ（コーディングしているフォルダ）に移動する
- ソース管理メニューの「・・・」からプルを選ぶ
