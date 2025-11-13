#!/bin/sh
# Tunggu PostgreSQL siap sebelum menjalankan app
echo "⏳ Menunggu PostgreSQL siap..."
until nc -z db 5432; do
  sleep 1
done

echo "✅ PostgreSQL sudah siap, menjalankan aplikasi..."
exec "$@"
