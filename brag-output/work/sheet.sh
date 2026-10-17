#!/bin/bash
# usage: sheet.sh out.png t1 t2 ... (2 columns)
out=$1; shift
args=(); fc=""; n=0; labels=""
for t in "$@"; do args+=(-i "stills/t$t.png"); fc+="[$n:v]scale=960:-1[s$n];"; n=$((n+1)); done
rows=$(( (n+1)/2 )); rl=""
for ((r=0;r<rows;r++)); do a=$((2*r)); b=$((2*r+1)); if [ $b -lt $n ]; then fc+="[s$a][s$b]hstack[r$r];"; else fc+="[s$a]pad=1920:ih[r$r];"; fi; rl+="[r$r]"; done
if [ $rows -gt 1 ]; then fc+="${rl}vstack=inputs=$rows"; else fc="${fc%;}"; fi
ffmpeg -y -loglevel error "${args[@]}" -filter_complex "$fc" -frames:v 1 "$out"
