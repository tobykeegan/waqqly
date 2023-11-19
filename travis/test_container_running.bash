#!/bin/bash

output="$( docker container inspect -f '{{.State.Status}}' waqqly )"

echo $output

if [ $output = "running" ]; then
    exit 0
else
    exit 1
fi
