# Project Images Upload Guide

## Where Your Images Should Go

Your images need to be placed in the repository at these exact locations:

### 1. Cerebral Palsy Home Visit
**Location:** `public/projects/cerebral-palsy-home-visit/images/`
- `main.jpg` (featured/thumbnail image)
- `image1.jpg`
- `image2.jpg`
- `image3.jpg`

### 2. Rural Education Program
**Location:** `public/projects/rural-education-program/images/`
- `main.jpg` (featured/thumbnail image)
- `image1.jpg`
- `image2.jpg`
- `image3.jpg`
- `image4.jpg`

### 3. Youth Skills Training Initiative
**Location:** `public/projects/skills-training-initiative/images/`
- `main.jpg` (featured/thumbnail image)
- `image1.jpg`
- `image2.jpg`
- `image3.jpg`

### 4. Clean Water Access Project
**Location:** `public/projects/clean-water-project/images/`
- `main.jpg` (featured/thumbnail image)
- `image1.jpg`
- `image2.jpg`
- `image3.jpg`
- `image4.jpg`

### 5. Orphanage Support Program
**Location:** `public/projects/orphanage-support/images/`
- `main.jpg` (featured/thumbnail image)
- `image1.jpg`
- `image2.jpg`
- `image3.jpg`

### 6. Women's Economic Empowerment Program
**Location:** `public/projects/women-empowerment/images/`
- `main.jpg` (featured/thumbnail image)
- `image1.jpg`
- `image2.jpg`
- `image3.jpg`
- `image4.jpg`

## How to Upload Images to GitHub

### Option 1: Using GitHub Web Interface
1. Go to your repository on GitHub
2. Navigate to `public/projects/[project-slug]/images/`
3. Click "Add file" → "Upload files"
4. Drag and drop your images or click to select them
5. Make sure the file names match exactly (case-sensitive!)
6. Commit the changes

### Option 2: Using Git Command Line
```bash
# 1. Copy your images to the correct directories in your local repository
# 2. Add them to git
git add public/projects/

# 3. Commit the changes
git commit -m "Add project images"

# 4. Push to GitHub
git push -u origin claude/tribe-africa-foundation-website-011CUdNAHroW1apVBNLnyB5Z
```

## Important Notes

1. **File names must match exactly** - Linux/Unix systems (where the website runs) are case-sensitive
   - ✅ Correct: `main.jpg`, `image1.jpg`
   - ❌ Wrong: `Main.jpg`, `IMAGE1.JPG`, `main.jpeg`

2. **All file names must be lowercase** and use `.jpg` extension (not `.jpeg`, `.JPG`, etc.)

3. **Images must be in the repository** - Just uploading them to your computer isn't enough; they need to be committed to git and pushed to GitHub

4. **After uploading**, the website will automatically show your images instead of the heart placeholders

## Verification

After uploading, verify your images are in the repository:
```bash
# Check if images exist
ls -la public/projects/*/images/

# Check git status
git status
```

You should see all your image files listed.
