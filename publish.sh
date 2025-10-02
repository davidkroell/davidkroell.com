#!/usr/bin/env bash

BASEURL="${BASEURL:-https://davidkroell.com/}"

hugo --baseURL $BASEURL --gc --cleanDestinationDir --minify

