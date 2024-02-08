# ベースイメージ
FROM node:16

# アプリケーションディレクトリを設定
WORKDIR /my-react-app

# アプリケーションの依存関係ファイルをコピー
COPY ./my-react-app/package.json package.json

# 依存関係をインストール
RUN yarn install

# アプリケーションのソースをコピー
COPY ./my-react-app .

# アプリケーションをビルド
CMD ["yarn", "start"]