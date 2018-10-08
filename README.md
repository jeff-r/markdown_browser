# Markdown Browser

Markdown Browser is a minimal Markdown file browser and editor.

It is a work in progress. It has rough edges.

Think of this as a very stripped-down version of the Evernote web app.

## What this is not

This has no authentication. It is not intended to be used on a public network. Do not run this while you're using the Starbucks Wifi. And for the love of dog, don't put this on a public server.

## But why?

Okay, you can browse and edit Markdown files pretty well using, for example, Visual Studio Code. But that's a bit of overkill when you just want to read your notes.

Mostly, this is a fun little project. But it also has a very clean interface, and lets you focus on the documents. It's nice to use.

## Installing:

This is a React project with a minimal Rails backend. So you need to have both Rails and yarn installed. Then:

```bash
git clone https://github.com/jeff-r/markdown_browser.git
cd rails
bundle
cd ../ui
yarn install
```

## Running:

I recommend that you use the 'notes' script in the project's root directory:

```
./notes path_to_markdown_dir
```

If you need or want to start the parts separately, then in the rails directory:

```
NOTES_DIR=<target_dir> rails s -p 4000
```

And in the ui directory:

```
yarn start
```

## Target directory

The target directory structure is currently a bit limited.

I was thinking more Evernote-style notebooks than regular directories; in Evernote, you get "notebooks" that each contain individual documents but no deeper notebooks.

In hindsight this was a limiting idea. But it was easier to implement, and got me going quickly. Eventually I'll get around to supporting directories and files more flexibly.

So, currently, your documentation directory must contain subdirectories but no markdown files, and each subdirectory contains markdown files but no deeper subdirectories.

So your document directory should look something like:

```
target_dir
  subdirectory1
    file1
    file2
  subdirectory2
    file3
    file4
  subdirectory3
    file5
```

## Managing files

At the moment, you need to create files manually. I usually do a `touch subdirectory2/file3` command.

Once the files are created, refresh the app to see and edit them.
