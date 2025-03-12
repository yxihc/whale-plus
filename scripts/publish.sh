#!/bin/sh

set -e

cd dist/whale
npm publish
cd -

echo "✅ Publish completed"
