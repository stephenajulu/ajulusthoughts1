[![Ajulu's Blog Netlify Status](https://api.netlify.com/api/v1/badges/7de87fa1-0073-49c0-91ff-fa37601db926/deploy-status)](https://app.netlify.com/sites/ajulusthoughts1/deploys)

# My Name is Stephen Ajulu and This is the Source Code of my Blog: https://blog.stephenajulu.com

I am currently using Hugo Novela ported by Forestry.io from Narative's Gatbsy Version.

I have customized it to my linking and will continue to do so until i achieve my version of perfection.

Currently am planning to copy posts from my official blog https://ajulusthoughts.wordpress.com 

For those interested in my version go ahead and fork this. I am still working on it and have about 7 things to do.

I have and will contine to document my process in both my blogs, on medium, dev.to and syndicate to to other blogs.

The reason i chose static is because of it's speed and security. As of this day (5th April 2020) PageSpeed Desktop Score was 100 while mobile was 99.
I am yet to implement a csr but if you fork it please do. 

If you do fork this make sure your image formats are in .webp and do a gtmetrics.com scan one of the post with the largest image(1920x1080 or 1900x600), if they say resize/scale take that no {the size you should implement} and do that for the rest of the images eg for mine the image was 1600x900 they told me to resize it to 675x600 so i resized all the images to 875x800) Why do this to make the blog faster.

I also implemented a service worker, icons and manifest file so you'll need to change that, feel free to use https://pwastarter.love2dev.com it takes less than 5 minutes and you'll have all the htings you need to make the website a progressive web application meaining it will work offline.

For more info kindly chech the series on both blogs.

Also note i added comments through utterances. It uses github issues as a comment base.


### For More Info Visit My 2 Blogs https://ajulusthoughts.wordpress.com and https://blog.stephenajulu.com


## Hugo Novela Forestry Starter

A port of [Narative](https://www.narative.co/)'s Gatsby theme [Novela](https://www.narative.co/labs/novela/)

![](images/tn.png)

<a href="https://app.forestry.io/quick-start?repo=forestryio/novela-hugo-starter&engine=hugo&version=0.62.2">
    <img alt="Import this project into Forestry" src="https://assets.forestry.io/import-to-forestryK.svg" />
</a>

### Prerequisites

- Hugo > 0.55.0

### Content Management

![Forestry user interface](images/novela-forestry.png)

This project has been pre-configured to work with [Forestry](https://forestry.io), just import your repository ✨. \
Any changes you make will be commited back to the repo, and deployed if you're using Netlify.

### Deployment and hosting with Netlify

Import your site in [Netlify](https://netlify.com)

1. Create a new site in Netlify and import your repository.
2. Set the build command to: `hugo --gc --minify`
3. Set the publish directory to: `public`
4. Make sure to set `HUGO_VERSION` to 0.55.0 or above (tested with 0.62.2)
3. Set the publish directory to: `public`

That's it, now your site gets deployed automatically on `git push` or when saving documents from Forestry.

### Development

```bash
# clone the repository
git clone git@github.com:forestryio/novela-hugo-starter.git

# cd in the project directory
cd novela-hugo-starter

# Start local dev server
hugo server
```

For more information, see [official Hugo documentation](https://gohugo.io/getting-started/).

### Customization

#### Logo

Add to your projects layout directory your logo's SVG:
`/layouts/icons/ui/logo.html`

#### Socials

In order for the Socials to be surfaced in Forestry, you should copy the theme's `config/_default/social.yaml` to your project.

#### Authors

You should register authors as a taxonomy in your project's `config.yaml``

```yaml
taxonomies:
  author: authors
```

##### Creating authors

Add a similar file to your content directory and Front Matter example.

```yaml
# /content/authors/firstname-lastname/_index.md
---
title: Dennis Brotzky
bio: |
  Written by You. This is where your author bio lives. Share your work, your
  joys and of course, your Twitter handle.
avatar: /images/dennis-brotzky.jpg
featured: true
social:
  - title: github
    url: https://github.com
  - title: twitter
    url: https://twitter.com
  - title: instagram
    url: https://instagram.com
  - title: dribbble
    url: https://dribbble.com
  - title: unsplash
    url: https://unsplash.com
---
```

##### Assigning authors to posts.
Add the name of the author to the "authors" field:

```yaml
authors:
  - Dennis Brotzky
  - Thiago Costa
```
#### Newsletter call to action

This theme includes a shortcode for a newsletter callout form that you can add to any page.
It uses [formspree.io](//formspree.io/) as proxy to send the actual email. Each month, visitors can send you up to one thousand emails without incurring extra charges. Visit the Formspree site to get get going add your Formspree email to your shortcode like this:

```
{{< subscribe email="your@email.com" >}}
```


### LICENSE

MIT
