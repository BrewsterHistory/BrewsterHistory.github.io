# How to Put This Website Online — Step by Step

This guide tells you exactly what to click and type, in order, to put your new website online. It assumes you have never done this before.

Read this paragraph carefully before you start:

> You will be moving files between three places: **a web browser** (for the GitHub website), **GitHub Desktop** (an app on your computer), and **your file manager** (File Explorer on Windows, Finder on Mac). I will say which one to use at each step. Don't try to read ahead. Do one step, finish it, then come to the next.

If anything looks different from what I describe, stop and write down what you see instead. Don't guess.

You will need:
- A web browser (Chrome, Edge, Safari, Firefox — any is fine)
- GitHub Desktop installed (you already have this — it's how you deploy your Southeast Centre site today)
- The folder of files I delivered to you

That's it. Total time: about 30 minutes.

---

## Part 1 — Make a new home for your files on GitHub

In this part you create an empty container on GitHub.com where your files will eventually live.

### Step 1.1 — Open GitHub.com

1. Open your web browser.
2. Go to `https://github.com` and sign in if you aren't already signed in.
3. In the top-right of the page, click your profile picture.
4. From the dropdown that appears, click **Your organizations**.
5. You will see a list of organizations. Click **BrewsterHistory**.

You are now on the BrewsterHistory organization page. You should see your existing `southeast-centre` repository in the list.

### Step 1.2 — Create the new repository

1. On the BrewsterHistory page, look for a green button that says **New** (top-right area). Click it.
2. You are now on the "Create a new repository" page. Fill in the form:
   - **Repository name** — type exactly this, with capital letters: `BrewsterHistory.github.io`

     Capitalization matters. Type it just like that.

   - **Description** — leave blank or type whatever you want.
   - **Public / Private** — select **Public**.
   - **Initialize this repository with** — check the box that says **Add a README file**.
   - **Add .gitignore** — leave as "None."
   - **Choose a license** — leave as "None."
3. Scroll to the bottom of the page. Click the green **Create repository** button.

You should now see a new page that is the home page of the empty repository, with one file listed (`README.md`). 

**Stop here. Do not close the browser tab.** You will need it later. Move on to Part 2.

---

## Part 2 — Get the empty repository onto your computer

GitHub.com has the empty container. Now you need a copy of that container on your own computer so you can put files into it.

### Step 2.1 — Open GitHub Desktop

1. Open GitHub Desktop on your computer (the same app you use to publish your Southeast Centre site).

### Step 2.2 — Clone the new repository

"Cloning" means making a local copy on your computer.

1. At the top of GitHub Desktop, click **File** in the menu bar.
2. Click **Clone repository...**
3. A window opens with three tabs at the top: **GitHub.com**, **GitHub Enterprise**, **URL**. Click **GitHub.com**.
4. You should see a list of repositories. Look for `BrewsterHistory/BrewsterHistory.github.io`. (You may need to scroll, or there may be a search box.)

   If you don't see it, click the small refresh icon, or close this window and reopen it via File → Clone repository.

5. Click on `BrewsterHistory/BrewsterHistory.github.io` once so it's highlighted.
6. At the bottom of the window there's a field labeled **Local path**. This is where on your computer the folder will be created. Note this path — you will need to navigate to it in the next step.

   The default is usually something like `C:\Users\YourName\Documents\GitHub` on Windows or `/Users/YourName/Documents/GitHub` on Mac. That's fine — you can leave it alone.

7. Click **Clone**.

GitHub Desktop will work for a few seconds and then show you a screen for the new repository, with a sidebar on the left that says "No local changes."

### Step 2.3 — Open the local folder to confirm it exists

1. In GitHub Desktop, at the top of the window, look for a menu item or link that says **Show in Explorer** (Windows) or **Show in Finder** (Mac). It might be under the **Repository** menu, or there may be a button labeled "Show in Explorer" on the main screen.
2. Click it.

A file manager window opens showing the folder. It should contain exactly one file: `README.md`.

**Leave this file manager window open.** You will be putting files into it next.

---

## Part 3 — Copy the new files into the local folder

This is the part where you actually populate the folder.

### Step 3.1 — Find the files I delivered

The package I delivered contains nine files and several folders. Find them on your computer first. Wherever you downloaded or extracted them, you should see a structure like this:

```
DEPLOYMENT.md                       ← this guide
HOW-TO-DEPLOY.md                    ← the simpler version of this guide
index.html                          ← about 17 KB
assets/                             ← folder
research/                           ← folder
southeast-centre/                   ← folder
images/                             ← folder
```

(Plus possibly a folder called `assets`, `research`, `southeast-centre`, and `images` — those are folders that contain more files inside them.)

### Step 3.2 — Copy everything into the local repository folder

1. Open the file manager window showing where I delivered the files.
2. Select **all of them** at once.
   - **Windows:** click the first file, then press `Ctrl+A` to select everything in that folder.
   - **Mac:** click the first file, then press `Cmd+A` to select everything.
3. Copy them.
   - **Windows:** press `Ctrl+C`.
   - **Mac:** press `Cmd+C`.
4. Switch to the other file manager window — the one showing your local `BrewsterHistory.github.io` folder (the one with just `README.md` in it).
5. Paste.
   - **Windows:** press `Ctrl+V`.
   - **Mac:** press `Cmd+V`.

When you're done, your local `BrewsterHistory.github.io` folder should now contain:

```
BrewsterHistory.github.io/
  README.md
  DEPLOYMENT.md
  HOW-TO-DEPLOY.md  ← this file
  index.html
  assets/
  research/
  southeast-centre/
  images/
```

### Step 3.3 — About the two index.html files

If you look inside `southeast-centre/` you will see another file named `index.html`. That is correct and intentional. You now have two files called `index.html`:

- The one in the **main folder** (`BrewsterHistory.github.io/index.html`) is your **landing page**. It's small, about 17 KB.
- The one inside the `southeast-centre` folder (`BrewsterHistory.github.io/southeast-centre/index.html`) is your **Southeast Centre app**. It's large, about 519 KB.

They have the same filename but they live in different folders and serve completely different pages. This is how websites work. Don't try to rename either of them.

---

## Part 4 — Copy your old Southeast Centre files in

Right now the new `southeast-centre/` folder only has the `index.html` file I delivered. It's missing the `lots/` folder and the `images/` folder from your existing Southeast Centre site. You need to copy those over from your old repository.

### Step 4.1 — Find your old Southeast Centre files

You already have a local copy of the old Southeast Centre repository on your computer — that's the folder you push from when you publish updates today.

In GitHub Desktop:
1. At the top-left, there is a dropdown showing the currently selected repository (right now it says `BrewsterHistory.github.io`).
2. Click that dropdown.
3. From the list, click `southeast-centre` (your existing repository).
4. Now go to the **Repository** menu at the top → click **Show in Explorer** (Windows) or **Show in Finder** (Mac).

A file manager window opens showing your existing Southeast Centre files. You should see things like `index.html`, a `lots` folder, an `images` folder, and possibly others.

### Step 4.2 — Copy the lots and images folders over

1. In this file manager window (the one showing the old Southeast Centre files), look for the folder called `lots`.
2. Right-click on it → **Copy** (or click it once and press Ctrl+C / Cmd+C).
3. Switch to the other file manager window showing your new `BrewsterHistory.github.io` folder.
4. Open the `southeast-centre` folder inside it (double-click).
5. Paste the `lots` folder here. (Right-click in empty space → **Paste**, or press Ctrl+V / Cmd+V.)

Now do the same for the `images` folder:

6. Switch back to the old Southeast Centre file manager window.
7. Right-click on `images` → **Copy**.
8. Switch to the new `BrewsterHistory.github.io/southeast-centre/` window.
9. Paste.

If your old Southeast Centre folder contains any other folders besides `lots` and `images` (for example a `data/` folder, or anything else custom), copy those over too, into the same `southeast-centre/` folder.

**Do not copy the old `index.html` over.** The new one (the modified version I delivered) is already in place.

### Step 4.3 — Copy the hero image to the new landing page

The new landing page needs one image: the 1867 Beers atlas, used as the background of the hero section.

1. In your new `BrewsterHistory.github.io/southeast-centre/images/index/` folder (the one you just pasted), find the file `index_01.jpg`.
2. Copy it.
3. Navigate to your new `BrewsterHistory.github.io/images/index/` folder.
4. Paste it.

You now have two copies of `index_01.jpg` — one inside `southeast-centre/images/index/` and one at `images/index/`. That is intentional. The Southeast Centre app uses its copy, the landing page uses the root copy. You can replace either one later without affecting the other.

---

## Part 5 — Look at the site on your own computer before publishing

Before putting anything on the internet, open the files locally to confirm they work.

### Step 5.1 — Open the landing page in your browser

1. In your file manager, navigate to your `BrewsterHistory.github.io` folder.
2. Find `index.html` (the small one at the top of the folder, not the one inside `southeast-centre/`).
3. Double-click it.

Your web browser should open and show the new landing page. You should see:

- A dark hero section at the top with the Beers atlas as the background image.
- The text "Brewster History" in large letters.
- A featured card for Southeast Centre below the hero.
- Four research tiles below the featured card (in alphabetical order: Old Brewster Heights, Gage Home, Gay Nineties Restaurant, Losee Family).
- A short "About this work" block.
- A small copyright line at the bottom.

### Step 5.2 — Try clicking through

1. Click the Southeast Centre featured card. It should open the Southeast Centre app in the same tab. At the very top of that page, you should see a thin dark bar with the words `← Brewster History · Southeast Centre`.
2. Click `← Brewster History`. It should bring you back to the landing page.
3. Click one of the research tiles. It should open a draft research page with `← Brewster History` at the top.
4. Click that link. Back to the landing page.

If everything works as described, continue to Part 6.

If something is wrong — a missing image, a broken link, anything that doesn't match what I just described — **stop**. Don't push to GitHub yet. Write down exactly what you saw and ask me. It is much easier to fix something now than after it's online.

---

## Part 6 — Put it online

### Step 6.1 — Switch GitHub Desktop to the new repository

1. Open GitHub Desktop.
2. At the top-left, the repository dropdown probably still says `southeast-centre` from Step 4. Click it.
3. From the list, click `BrewsterHistory.github.io` to switch back.

### Step 6.2 — Check that GitHub Desktop sees your new files

In the left panel of GitHub Desktop, you should now see a long list of file names — these are all the files you just added. There may be 20 or 50 or 200 of them depending on how many lot files and images you copied over.

If the list is empty (says "No local changes"), something didn't work. Stop and ask.

### Step 6.3 — Commit and push

1. Look at the bottom of the left panel. There's a field labeled **Summary** (or "Summary (required)").
2. Type this exactly: `Initial site structure — landing page and Southeast Centre migration`
3. Below the summary field there's a blue button labeled **Commit to main**. Click it.
4. GitHub Desktop will work for a moment. Then at the top of the window, there will be a button labeled **Push origin** (or sometimes **Publish branch** if this is the first time). Click that.

GitHub Desktop will work for anywhere from 10 seconds to a couple of minutes, depending on how many files there are.

When it's done, the left panel will say "No local changes" again. That means your files are now on GitHub.com.

---

## Part 7 — Turn on the website

GitHub now has your files but isn't necessarily showing them as a website yet. You need to flip a switch.

### Step 7.1 — Open the repository settings on GitHub.com

1. In your web browser, go to `https://github.com/BrewsterHistory/BrewsterHistory.github.io`
2. Near the top of the page there's a row of tabs (Code, Issues, Pull requests, etc.). Click **Settings**, which is on the right side of that row.
3. In the left sidebar of the Settings page, find and click **Pages**.

### Step 7.2 — Confirm the settings

On the Pages settings page:

- Under **Source**, the dropdown should say **Deploy from a branch**.
- Under **Branch**, there are two dropdowns. The first should say `main`, the second should say `/ (root)`. If they don't, change them so they do, then click **Save**.

At the top of the Pages page, after a moment, you should see a green box that says something like:

> Your site is live at https://brewsterhistory.github.io/

It may say "Your site is being built" for a minute or two first. That's fine. Refresh the page after 60 seconds.

---

## Part 8 — Visit your live site

In your web browser, go to: `https://brewsterhistory.github.io/`

You should see your new landing page, just like when you opened it locally.

Click through the same way you tested in Part 5:

- Click the Southeast Centre featured card → it should open `https://brewsterhistory.github.io/southeast-centre/` and show the full Southeast Centre app.
- Click `← Brewster History` at the top → back to the landing page.
- Click a research tile → opens the draft research page.

If everything works, **you're done.** Your site is live.

---

## What to do if something is broken

The most common problem when first deploying is a missing image. The site loads, but a picture doesn't show.

To debug:

1. On the broken page, press the F12 key on your keyboard. A panel will open at the side or bottom of the browser.
2. Click the tab labeled **Console**.
3. You'll see red error messages, each pointing to a specific file the browser tried to load but couldn't.

Copy the error message and tell me what it says. I can tell you exactly what to fix.

---

## What about the old southeast-centre repository?

**Leave it alone for now.** Don't delete it. Don't archive it. Don't change anything in it.

If the new site has a serious problem you can't fix, the old one is your fallback — the original URL (`https://brewsterhistory.github.io/southeast-centre/`) keeps working from either source. Once the new site has been running smoothly for a week or two and you're confident, you can archive the old repository through its Settings page (Settings → scroll to the bottom → "Archive this repository"). Don't do this in the first few days.

---

## How to add a new research piece in the future

Once the site is up, adding new research pieces is simple. The previous deployment guide (`DEPLOYMENT.md`) has a section called "How to add a new research piece in the future" that explains the workflow. You don't need to do anything in that section right now.
