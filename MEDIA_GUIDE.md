# Media Upload Guide

This guide explains where and how to upload images and videos for your Tribe Africa Foundation website.

## Directory Structure

```
public/
├── images/
│   ├── hero/              # Hero/banner images
│   │   └── main-hero.jpg  # Main homepage hero image
│   └── team/              # Team member photos
│       ├── member1.jpg
│       ├── member2.jpg
│       ├── member3.jpg
│       ├── member4.jpg
│       ├── member5.jpg
│       └── member6.jpg
└── projects/              # Project-specific media
    ├── project-slug-1/    # Each project has its own folder
    │   ├── images/
    │   │   ├── main.jpg   # Featured image
    │   │   ├── image1.jpg
    │   │   └── image2.jpg
    │   └── videos/
    └── project-slug-2/
        ├── images/
        └── videos/
```

## Image Specifications

### Hero Image (Homepage)
- **Location**: `public/images/hero/main-hero.jpg`
- **Recommended Size**: 1920x1080px (Full HD)
- **Format**: JPG or PNG
- **Max File Size**: 500KB (compressed for web)
- **Aspect Ratio**: 16:9

**How to enable:**
1. Add your hero image to `public/images/hero/main-hero.jpg`
2. Edit `app/page.tsx` and uncomment lines 20-26:
   ```tsx
   <Image
     src="/images/hero/main-hero.jpg"
     alt="Tribe Africa Foundation"
     fill
     className="object-cover"
     priority
   />
   ```

### Team Member Photos
- **Location**: `public/images/team/`
- **Naming**: `member1.jpg`, `member2.jpg`, etc. (must match `data/content.json`)
- **Recommended Size**: 400x400px (Square)
- **Format**: JPG or PNG
- **Max File Size**: 200KB per image
- **Aspect Ratio**: 1:1 (Square)

**How to enable:**
1. Add 6 team member photos to `public/images/team/` named `member1.jpg` through `member6.jpg`
2. Edit `app/about/page.tsx` and uncomment lines 131-136:
   ```tsx
   <Image
     src={member.image}
     alt={member.name}
     fill
     className="object-cover"
   />
   ```

### Project Images
- **Location**: `public/projects/[project-slug]/images/`
- **Naming**:
  - `main.jpg` - Featured/thumbnail image
  - `image1.jpg`, `image2.jpg`, etc. - Gallery images
- **Recommended Size**: 1200x800px
- **Format**: JPG or PNG
- **Max File Size**: 300KB per image
- **Aspect Ratio**: 3:2

## Adding Media for Projects

### Step 1: Create Project Folder
Create a folder in `public/projects/` with your project slug (URL-friendly name):

```bash
mkdir -p public/projects/your-project-name/images
mkdir -p public/projects/your-project-name/videos
```

### Step 2: Add Images
Add your project images to the `images` folder:
- `main.jpg` - This will be the featured image shown on the projects page
- `image1.jpg`, `image2.jpg`, etc. - Additional images for the project gallery

### Step 3: Update projects.json
Edit `data/projects.json` and add your project:

```json
{
  "slug": "your-project-name",
  "title": "Your Project Title",
  "short_description": "Brief description for the projects page",
  "long_description": "Detailed description shown on the project detail page",
  "category": "Category Name",
  "date": "2024-01-15",
  "featured_image": "/projects/your-project-name/images/main.jpg",
  "images": [
    "/projects/your-project-name/images/image1.jpg",
    "/projects/your-project-name/images/image2.jpg",
    "/projects/your-project-name/images/image3.jpg"
  ],
  "videos": []
}
```

**Important**: The `slug` in the JSON must match the folder name in `public/projects/`

## Adding Videos

### YouTube/Vimeo Videos
For embedded videos from YouTube or Vimeo:

1. Get the embed URL:
   - **YouTube**: `https://www.youtube.com/embed/VIDEO_ID`
   - **Vimeo**: `https://player.vimeo.com/video/VIDEO_ID`

2. Add to `data/projects.json`:
   ```json
   "videos": [
     "https://www.youtube.com/embed/dQw4w9WgXcQ",
     "https://www.youtube.com/embed/another-video-id"
   ]
   ```

### Self-Hosted Videos
For videos hosted on your server:

1. Add video files to `public/projects/[project-slug]/videos/`
   - Recommended format: MP4
   - Max file size: 50MB (consider using video hosting for larger files)

2. Reference in `data/projects.json`:
   ```json
   "videos": [
     "/projects/your-project-name/videos/video1.mp4"
   ]
   ```

## Image Optimization Tips

1. **Compress Images**: Use tools like:
   - [TinyPNG](https://tinypng.com) - Online compression
   - [ImageOptim](https://imageoptim.com) - Mac app
   - [Squoosh](https://squoosh.app) - Google's web app

2. **Resize Images**: Don't upload images larger than needed
   - Hero: Max 1920px wide
   - Team: Max 400px square
   - Projects: Max 1200px wide

3. **Use Correct Format**:
   - Photos: JPG (smaller file size)
   - Graphics/Logos: PNG (better quality for graphics)
   - Modern browsers: WebP (best compression)

## Example: Adding a New Project

Let's say you want to add a project called "School Renovation Program":

1. **Create folders**:
   ```bash
   mkdir -p public/projects/school-renovation-program/images
   mkdir -p public/projects/school-renovation-program/videos
   ```

2. **Add images**:
   - Copy `main.jpg` to `public/projects/school-renovation-program/images/main.jpg`
   - Copy other images as `image1.jpg`, `image2.jpg`, etc.

3. **Update data/projects.json**:
   ```json
   {
     "slug": "school-renovation-program",
     "title": "School Renovation Program",
     "short_description": "Renovating rural schools to provide better learning environments",
     "long_description": "Our School Renovation Program focuses on improving infrastructure...",
     "category": "Education",
     "date": "2024-11-01",
     "featured_image": "/projects/school-renovation-program/images/main.jpg",
     "images": [
       "/projects/school-renovation-program/images/image1.jpg",
       "/projects/school-renovation-program/images/image2.jpg",
       "/projects/school-renovation-program/images/image3.jpg"
     ],
     "videos": [
       "https://www.youtube.com/embed/example-video-id"
     ]
   }
   ```

4. **Test**: Run `npm run dev` and visit:
   - Projects page: `http://localhost:3000/projects`
   - Project detail: `http://localhost:3000/projects/school-renovation-program`

## Updating Team Member Information

To change team member details:

1. **Update text**: Edit `data/content.json` under `about.team.members`
2. **Update photos**: Replace files in `public/images/team/`
   - Ensure filenames match those in `content.json`
   - Example: If JSON says `"image": "/images/team/member1.jpg"`, file must be at `public/images/team/member1.jpg`

## Deployment Notes

When deploying to Vercel:

1. **Commit all media files** to your git repository
2. All files in `public/` will be automatically deployed
3. Large files (>5MB) may slow down deployment - consider using a CDN or image hosting service for large media libraries

## Troubleshooting

### Image not showing?
1. Check the file path is correct (case-sensitive!)
2. Ensure the image is in the `public/` folder
3. Verify the path in JSON matches the actual file location
4. Check the browser console for 404 errors

### Image too large/slow loading?
1. Compress the image using tools mentioned above
2. Resize to recommended dimensions
3. Consider using Next.js Image Optimization (automatically enabled)

### Project not appearing?
1. Verify the `slug` in `projects.json` is URL-friendly (lowercase, hyphens only)
2. Check that all required fields are filled in the JSON
3. Restart the development server after JSON changes

## Need Help?

If you encounter issues:
1. Check the browser console for errors (F12)
2. Verify all file paths are correct
3. Ensure JSON syntax is valid (no trailing commas, proper quotes)
4. Contact your developer for assistance

---

**Quick Reference Paths**:
- Hero Image: `public/images/hero/main-hero.jpg`
- Team Photos: `public/images/team/member[1-6].jpg`
- Project Media: `public/projects/[slug]/images/` and `/videos/`
- Content Data: `data/content.json` and `data/projects.json`
