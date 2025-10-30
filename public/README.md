# Public Assets Directory

This directory contains all static assets for the Tribe Africa Foundation website.

## Directory Structure

```
public/
├── images/
│   ├── hero/              # Hero/banner images for homepage
│   │   └── main-hero.jpg  # Main homepage hero image (1920x1080px recommended)
│   └── team/              # Team member photos (400x400px recommended)
│       ├── member1.jpg
│       ├── member2.jpg
│       ├── member3.jpg
│       ├── member4.jpg
│       ├── member5.jpg
│       └── member6.jpg
└── projects/              # Project-specific media
    └── [project-slug]/    # Create a folder for each project (slug from projects.json)
        ├── images/
        │   ├── main.jpg   # Featured image for project thumbnail
        │   ├── image1.jpg # Gallery images
        │   └── image2.jpg
        └── videos/        # Project videos (optional)
```

## How to Add Media

### Hero Image
1. Add your hero image as `public/images/hero/main-hero.jpg`
2. Uncomment the Image component in `app/page.tsx` (lines 20-26)

### Team Photos
1. Add 6 team member photos to `public/images/team/`
2. Name them `member1.jpg` through `member6.jpg`
3. Uncomment the Image component in `app/about/page.tsx` (lines 131-136)

### Project Media
1. Create a folder: `public/projects/your-project-slug/images/`
2. Add images with `main.jpg` as the featured image
3. Update `data/projects.json` with the project details and image paths

## Image Specifications

- **Hero**: 1920x1080px (16:9), JPG, max 500KB
- **Team**: 400x400px (1:1), JPG, max 200KB
- **Projects**: 1200x800px (3:2), JPG, max 300KB

## More Information

See [MEDIA_GUIDE.md](../MEDIA_GUIDE.md) for detailed instructions.
