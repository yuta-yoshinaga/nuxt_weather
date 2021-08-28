FROM node:14.15.5

# locale & timezone (Asia/Tokyo)
# https://github.com/moby/moby/issues/12084
ENV LANG C.UTF-8
ENV TZ Asia/Tokyo
ENV HOST 0.0.0.0

# system update
RUN apt-get update && \
    apt-get install -y vim less

WORKDIR /root

# install direnv command.
# - https://github.com/direnv/direnv
# - https://github.com/direnv/direnv/releases
ARG DEV_DIRENV_VERSION=v2.19.0
RUN wget -O direnv https://github.com/direnv/direnv/releases/download/$DEV_DIRENV_VERSION/direnv.linux-amd64 && \
    mv direnv /usr/local/bin/ && \
    chmod +x /usr/local/bin/direnv && \
    echo 'eval "$(direnv hook bash)"' >> ~/.bashrc

# install vue-cli
RUN npm install --global @vue/cli @vue/cli-init

# copy application code from host.
ADD src /src
WORKDIR /src/app

# install packages.
RUN npm install

EXPOSE 3000
CMD ["npm", "run", "dev"]