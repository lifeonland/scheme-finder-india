#!/bin/bash
# A simple script to verify if the header is correctly placed and not hidden
grep -A 10 "Header" app/page.tsx
