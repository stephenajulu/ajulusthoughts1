+++
authors = ["stephen-ajulu"]
date = 2020-03-31T15:25:00Z
excerpt = "Hey guys? Today we will be building a beautiful, fast, SEO optimized, progressive JAMstack blog for free. Step by step."
hero = "/images/Screenshot_2020-03-31 Stephen Ajulu's Blog.png"
timeToRead = 5
title = "Building a Beautiful Progressive JAMstack Blog Part 1: Day 1 to 3"

+++
Hey guys? Today we will be building a beautiful, fast, SEO optimized, progressive JAMstack blog for free. Step by step.

Shall we begin?

### **Day 1**

Choose The Best Static Site Generator. Weigh Pros and Cons. Research.

* **_Choice 1: Jekyll_** – Built on Ruby on Rails, Very Good Community, Extensive Knowledge, Used and Endorsed by [**GitHub**](https://github.com), Very Slow Build. Not good with large blogs(over 30 posts) due to slow build time. Hence not suitable.  
  ❌
* **_Choice 2: Gatsby_** – Built on React, GraphQl and Webpack, Excellent Community, Lack of Sufficient Knowledge, Used and Endorsed by [**Contentful**](https://contentful.com), Lighting Fast Build, Good With Everything, But Not Suitable Due To Time Constraint. However Further Research to Be Done For Future Purposes.  
  ✖️
* **_Choice 3: Hugo_** – Built on Go, Excellent Community, Sufficient Knowledge, Used and Endorsed by [**Forestry.io**](https://forestry.io), Fast Build, Very Good for Big Blogs, In fact its Built for Large Websites and Blogs.  
  ✔️
* Choice? **Hugo**
* **End of Day 1**

### **Day 2**

* Find a good Hugo theme
* Build the blog
* Host on GitHub
* Create 2 branches(Master and Test Features)
* Add to netlify for continuous deployment
* Assign master branch domain name: blog.stephenajulu.com
* Research
* **End of Day 2**

### **Day 3**

* Create a manifest.json
* Generate favicons and app icons for Android, IOS, and Windows
* Create a splashscreen
* Build the “Add To Homescreen” script(a2hs.js, .min.js & .css)
* Build the Service Worker(sw.js) with precache on
* Upload to GitHub (110 icons, manifest.json, sw.js)
* Research
* **End of Day 3**

Now you are up to date.  
The reason i documented my process here is so that anyone can learn.  
I am a crappy dev, i don’t know as much js as i wish i knew.  
But i believe we all have something to learn from each other.  
Ask me questions in the comment section and I’ll answer them to the best of my knowledge.  
I am building a Progressive JAMstack Blog.  
You can view the up to date version here: [**https://blog.stephenajulu.com**](https://blog.stephenajulu.com "https://blog.stephenajulu.com")

### **Unfinished Work**

* Linking the manifest.json to the head
* Adding a few meta tags for SEO
* Add the Service Worker register to the bottom of the body tag
* Add the Add to Homescreen below the service worker register
* Add the Web Share API
* Add the Push Notifications API
* Link the blog back to [**stephenajulu.com**](https://stephenajulu.com)
* Debug and make sure everything works well including the service worker.
* Copy all blog posts from [**https://ajulusthoughts.wordpress.com**](https://ajulusthoughts.wordpress.com "https://ajulusthoughts.wordpress.com") to [**https://blog.stephenajulu.com**](https://blog.stephenajulu.com "https://blog.stephenajulu.com")
* Optimize Image Assets
* Add gzip

Once all the steps are done, the blog should be able to be installed (like a native app), viewed offline (no internet thanks to the Service Worker), and when there’s internet i should be able to inform those who’ve installed it (thanks to the Push Notifications API) that there’s a new blog post, and inform them on the coming give away that is strictly reserved for them, among other things.

**NOTE:** I keep reiterating my personal site every year, working on a new design, using hugo as well but still haven’t assigned the domain name, so you can get the sneak peak of the new design here: [**https://stephenajulu.nelify.com**](https://stephenajulu.nelify.com "https://stephenajulu.nelify.com") it’s version 5. The previous versions are in the footer of [**https://stephenajulu.com**](https://stephenajulu.com "https://stephenajulu.com"). Now why do i do this? To learn new technologies while doing something meaningful and also to make sure my site is up-to date. **Also note** [**ajulusthoughts.wordpress.com**](https://ajulusthoughts.wordpress.com) **is my sweetheart nothing would ever replace it unless it looks exactly like it and promises better performance**. It took me 5 years to build this blog, i am not throwing it away. It will still be updated and will remain great, might even get it’s domain name(ajulusthoughts.com) but [**blog.stephenajulu.com**](https://blog.stephenajulu.com) will be more like a personal blog while this remains a brand blog.

### **Important things to know**

A **progressive web application** is just a website that behaves like a native app(like the ones installed from google play store). Thanks to a service worker, the website can be accessed online because the sw caches the site. It can be installed upon visiting the website, you’ll either see a pop-up(thanks to the Add to Homescreen script) or see a home icon with a plus on it(if Firefox). Progressive Web Apps are faster than any website you’ve seen because of the cache feature. This new blog uses a headless cms: [**Forestry.io**](https://forestry.io)

Those things left should take 2 days. I run into a bit of a hiccup, an issue with the blog that needs to be fixed. Already submitted an issue via github, so it should be resolved by tomorrow. It’s the reason i didn’t complete the process today. I can’t add the scripts to the head and body section because i forgot to include the “layouts/partials/head.html” and “layouts/index.md”  
I also forgot, I’ll be adding a newsletter section to every page but that’s until the above issues are fixed.

To experience PWAs, visit this link: [**https://tomango.co.uk**](https://tomango.co.uk "https://tomango.co.uk")

Static Site Generators, Headless CMS, JAMstack, Progressive Web Applications and Serverless are the Future!Why?

* Cost effective
* Lighting fast
* Can be used on any device(cross platform)
* No servers
* Feature Rich
* Can increase engagement way more than native apps and traditional websites

For security and even faster speeds, I have passed it through Cloudflare and enabled all of Netlify’s asset optimization. The site isn’t as fast as it should be due to the fact that i haven’t added the service worker register.

#### 

Also note PWAs don’t have a good desktop support yet, only Desktop Chromiums(Chrome, Brave, Opera etc) support PWAs(according to my tests, Firefox is yet to release an update with support but PWAs are fully supported by Android, Smart TVs, Smart Watches, KAIOS, Linux, Chrome OS and such. PWAs can also be uploaded to all the stores (Google Play, Microsoft, KAIOS Stores and among others)

### PageSpeed Insights For blog.stephenajulu.com

**_Mobile Score_ : 96**  
TTT, First Meaningful Paint, First Contentful Paint, First CPU idle: 2 seconds  
**_Desktop Score_ : 97**  
TTT, First Meaningful Paint, First Contentful Paint, First CPU idle: 0.7 seconds  
**_Our Goal is 98 or 99_**  
Sadly Day 4 will start tomorrow as i am working on fixing the hiccup we encountered myself, no response on the issue.

### [**Ajulu’s Thoughts**](https://ajulusthoughts.wordpress.com) – Delivering Quality Tech, Cybersecurity & Dev Content Since November 2016

Hey Devs? Found anything wrong with this info? Kindly write your comment down below on what to change.

I will appreciate it, if you take 10 seconds of your time to check out my donations page and donate to the blog and other causes. 40% of the donation goes to buying this blog an official domain name, the rest goes to charity eg supporting children homes. Any amount received will be shown, from whom and to where it went. I will also include screenshots of inflow and outflow. So go check it out: [**Donations**](https://ajulusthoughts.wordpress.com/donate/) and donate! You can also buy me something via the wishing list. Thank you and have a wonderful day.

OwlSec Technologies design and develop fast, secure and search engine optimized progressive websites that use JAMstack or CMS based technologies e.g WordPress, Drupal and more. Making sure a business or individual has not just an online presence but also a lead generation strategy.  
Get a quote: [**info@owlsectechnologies.co.ke**](mailto:info@owlsectechnologies.co.ke)  
Visit our website: [**owlsectechnologies.co.ke**](https://owlsectechnologies.co.ke)

# **SOURCE:** [**AJULU'S THOUGHTS**](https://ajulusthoughts.wordpress.com/2020/03/31/building-a-beautiful-progressive-jamstack-blog-part-1/)

{{< subscribe email="ajulu@stephenajulu.com" >}}

{{< rawhtml >}}

<p>

<script src="https://utteranc.es/client.js"

repo="stephenajulu/ajulusthoughts1"

issue-term="pathname"

label="Comment"

theme="github-light"

crossorigin="anonymous" async>

</script>

</p>

{{< /rawhtml >}}

{{< rawhtml >}}
<p>
<style>

.resp-sharing-button__link,

.resp-sharing-button__icon {

  display: inline-block

}

.resp-sharing-button__link {

  text-decoration: none;

  color: #fff;

  margin: 0.5em

}

.resp-sharing-button {

  border-radius: 5px;

  transition: 25ms ease-out;

  padding: 0.5em 0.75em;

  font-family: Helvetica Neue,Helvetica,Arial,sans-serif

}

.resp-sharing-button__icon svg {

  width: 1em;

  height: 1em;

  margin-right: 0.4em;

  vertical-align: top

}

.resp-sharing-button--small svg {

  margin: 0;

  vertical-align: middle

}

/* Non solid icons get a stroke */

.resp-sharing-button__icon {

  stroke: #fff;

  fill: none

}

/* Solid icons get a fill */

.resp-sharing-button__icon--solid,

.resp-sharing-button__icon--solidcircle {

  fill: #fff;

  stroke: none

}

.resp-sharing-button--twitter {

  background-color: #55acee

}

.resp-sharing-button--twitter:hover {

  background-color: #2795e9

}

.resp-sharing-button--pinterest {

  background-color: #bd081c

}

.resp-sharing-button--pinterest:hover {

  background-color: #8c0615

}

.resp-sharing-button--facebook {

  background-color: #3b5998

}

.resp-sharing-button--facebook:hover {

  background-color: #2d4373

}

.resp-sharing-button--tumblr {

  background-color: #35465C

}

.resp-sharing-button--tumblr:hover {

  background-color: #222d3c

}

.resp-sharing-button--reddit {

  background-color: #5f99cf

}

.resp-sharing-button--reddit:hover {

  background-color: #3a80c1

}

.resp-sharing-button--google {

  background-color: #dd4b39

}

.resp-sharing-button--google:hover {

  background-color: #c23321

}

.resp-sharing-button--linkedin {

  background-color: #0077b5

}

.resp-sharing-button--linkedin:hover {

  background-color: #046293

}

.resp-sharing-button--email {

  background-color: #777

}

.resp-sharing-button--email:hover {

  background-color: #5e5e5e

}

.resp-sharing-button--xing {

  background-color: #1a7576

}

.resp-sharing-button--xing:hover {

  background-color: #114c4c

}

.resp-sharing-button--whatsapp {

  background-color: #25D366

}

.resp-sharing-button--whatsapp:hover {

  background-color: #1da851

}

.resp-sharing-button--hackernews {

background-color: #FF6600

}

.resp-sharing-button--hackernews:hover, .resp-sharing-button--hackernews:focus {   background-color: #FB6200 }

.resp-sharing-button--vk {

  background-color: #507299

}

.resp-sharing-button--vk:hover {

  background-color: #43648c

}

.resp-sharing-button--facebook {

  background-color: #3b5998;

  border-color: #3b5998;

}

.resp-sharing-button--facebook:hover,

.resp-sharing-button--facebook:active {

  background-color: #2d4373;

  border-color: #2d4373;

}

.resp-sharing-button--twitter {

  background-color: #55acee;

  border-color: #55acee;

}

.resp-sharing-button--twitter:hover,

.resp-sharing-button--twitter:active {

  background-color: #2795e9;

  border-color: #2795e9;

}

.resp-sharing-button--tumblr {

  background-color: #35465C;

  border-color: #35465C;

}

.resp-sharing-button--tumblr:hover,

.resp-sharing-button--tumblr:active {

  background-color: #222d3c;

  border-color: #222d3c;

}

.resp-sharing-button--email {

  background-color: #777777;

  border-color: #777777;

}

.resp-sharing-button--email:hover,

.resp-sharing-button--email:active {

  background-color: #5e5e5e;

  border-color: #5e5e5e;

}

.resp-sharing-button--linkedin {

  background-color: #0077b5;

  border-color: #0077b5;

}

.resp-sharing-button--linkedin:hover,

.resp-sharing-button--linkedin:active {

  background-color: #046293;

  border-color: #046293;

}

.resp-sharing-button--whatsapp {

  background-color: #25D366;

  border-color: #25D366;

}

.resp-sharing-button--whatsapp:hover,

.resp-sharing-button--whatsapp:active {

  background-color: #1DA851;

  border-color: #1DA851;

}

</style>

<!-- Sharingbutton Facebook -->

<a class="resp-sharing-button__link" href="[https://facebook.com/sharer/sharer.php?u=](https://facebook.com/sharer/sharer.php?u= "https://facebook.com/sharer/sharer.php?u="){{ .Permalink }}" target="_blank" rel="noopener" aria-label="Facebook">

  <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--medium"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">

    <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg "http://www.w3.org/2000/svg")" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg></div>Facebook</div>

</a>

<!-- Sharingbutton Twitter -->

<a class="resp-sharing-button__link" href="[https://twitter.com/intent/tweet/?text=Share](https://twitter.com/intent/tweet/?text=Share "https://twitter.com/intent/tweet/?text=Share"){{ .Page.Title }}&amp;url={{ .Permalink }}" target="_blank" rel="noopener" aria-label="Twitter">

  <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--medium"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">

    <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg "http://www.w3.org/2000/svg")" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg></div>Twitter</div>

</a>

<!-- Sharingbutton Tumblr -->

<a class="resp-sharing-button__link" href="[https://www.tumblr.com/widgets/share/tool?posttype=link&amp;title=Share](https://www.tumblr.com/widgets/share/tool?posttype=link&amp;title=Share "https://www.tumblr.com/widgets/share/tool?posttype=link&amp;title=Share"){{ .Page.Title }}&amp;caption=Share{{ .Page.Title }}&amp;content={{ .Permalink }}&amp;canonicalUrl={{ .Permalink }}amp;shareSource=tumblr_share_button" target="_blank" rel="noopener" aria-label="Tumblr">

  <div class="resp-sharing-button resp-sharing-button--tumblr resp-sharing-button--medium"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">

    <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg "http://www.w3.org/2000/svg")" viewBox="0 0 24 24"><path d="M13.5.5v5h5v4h-5V15c0 5 3.5 4.4 6 2.8v4.4c-6.7 3.2-12 0-12-4.2V9.5h-3V6.7c1-.3 2.2-.7 3-1.3.5-.5 1-1.2 1.4-2 .3-.7.6-1.7.7-3h3.8z"/></svg></div>Tumblr</div>

</a>

<!-- Sharingbutton E-Mail -->

<a class="resp-sharing-button__link" href="mailto:?subject=Share{{ .Page.Title }}&amp;body={{ .Permalink }}" target="_self" rel="noopener" aria-label="E-Mail">

  <div class="resp-sharing-button resp-sharing-button--email resp-sharing-button--medium"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">

    <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg "http://www.w3.org/2000/svg")" viewBox="0 0 24 24"><path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z"/></svg></div>E-Mail</div>

</a>

<!-- Sharingbutton LinkedIn -->

<a class="resp-sharing-button__link" href="[https://www.linkedin.com/shareArticle?mini=true&amp;url=](https://www.linkedin.com/shareArticle?mini=true&amp;url= "https://www.linkedin.com/shareArticle?mini=true&amp;url="){{ .Permalink }}&amp;title=Share{{ .Page.Title }}&amp;summary=Share{{ .Page.Title }}&amp;source={{ .Permalink }}" target="_blank" rel="noopener" aria-label="LinkedIn">

  <div class="resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--medium"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">

    <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg "http://www.w3.org/2000/svg")" viewBox="0 0 24 24"><path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"/></svg></div>LinkedIn</div>

</a>

<!-- Sharingbutton WhatsApp -->

<a class="resp-sharing-button__link" href="whatsapp://send?text=Share{{ .Page.Title }}&amp{{ .Permalink }}" target="_blank" rel="noopener" aria-label="WhatsApp">

  <div class="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--medium"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">

    <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg "http://www.w3.org/2000/svg")" viewBox="0 0 24 24"><path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"/></svg></div>WhatsApp</div>

</a>
</p>
{{< /rawhtml >}}