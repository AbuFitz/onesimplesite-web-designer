#!/bin/bash
set -e
cd "$(dirname "$0")"
OUT=..
n=$(ls frames/*.png | wc -l)
echo "frames: $n"
[ "$n" -eq 600 ] || { echo "expected 600 frames"; exit 1; }
VF="scale=out_color_matrix=bt709:out_range=tv,format=yuv420p"
CS="-colorspace bt709 -color_primaries bt709 -color_trc bt709"
# high-quality master
ffmpeg -y -loglevel error -framerate 30 -i frames/f%04d.png -i soundtrack.wav \
  -vf "$VF" $CS -c:v libx264 -preset slow -crf 12 -profile:v high -pix_fmt yuv420p -r 30 \
  -af "volume=-1.6dB" -c:a aac -b:a 320k -shortest -movflags +faststart $OUT/onesimplesite-intro-master.mp4
# compressed, fast-start web build
ffmpeg -y -loglevel error -i $OUT/onesimplesite-intro-master.mp4 \
  -c:v libx264 -preset slow -crf 21 -maxrate 5M -bufsize 10M -profile:v high -level 4.1 -pix_fmt yuv420p -g 60 -r 30 $CS \
  -c:a aac -b:a 128k -movflags +faststart $OUT/onesimplesite-intro-web.mp4
# poster: strongest settled frame (real site resolved, headline fully in)
ffmpeg -y -loglevel error -i frames/f0210.png -frames:v 1 -q:v 2 $OUT/onesimplesite-intro-poster.jpg
echo ENCODED
ls -la $OUT/*.mp4 $OUT/*.jpg
