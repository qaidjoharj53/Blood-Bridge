FROM php:8.0-fpm-alpine
RUN apk add icu-dev
RUN docker-php-ext-install -j$(nproc) intl \
    pdo \
    pdo_mysql \
    mysqli