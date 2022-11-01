# Svelte Single File (HTML NFTs)
This is a template repository focused on building small web apps. When you build this project the resulting file is a single `index.html` with all assets inlined. While I made this project with the focus of building/minting HTML NFTs, it really could be used for anything.

## Get Started
- Have [Node.js](https://nodejs.org/en/) installed.
- Click "Use this template" and then clone/download the created repo.
- Open the cloned/downloaded folder in [VSCode](https://code.visualstudio.com/)
- Hit `ctrl + ~` to open the terminal in VSCode and run `npm install`.

### Development Server
You can start the development server using the default app config by running the following.
```
npm run dev:default
```

### Build
You can build the project into a single HTML file using the default app config by running the following. This will output to `./dist` under a folder named after the config file used. In the default case, this will output to `./dist/default`.
```
npm run build:default
```

### Styles
A basic SCSS structure setup in `/styles`. Styles written here will be compiled and inlined in the resulting HTML file.

## App Configs
App configs let you use the same code and components to build multiple versions of the same experience. For example, I released 3 versions of [Bitsweeper](https://www.terminallyminted.art/) that were different color themes and board sizes. The underlying code for all of the games is exactly the same, all that changes is the game/build config.

A config can include anything your want, any settings or details you want to pass to your app. The only requirement is that it is a valid JSON file. Here is the config I wrote for Bitsweeper. There were then two more configs to build the Green version and the Gold version.

```json
{
    "theme" : "var(--color-red)",
    "title" : "Red Edition",
    "size": 4,
    "poison": [
        [1,1],
        [0,3],
        [3,2],
        [3,0]
    ]
}
```

## Accessing Configs
To access the selected app config, you can `import config from "src/config"` in any `.svelte` or `.ts` file. This will import a parsed and typed version of the selected config file for use in your app code.

## Adding/Editing Configs
If you update the shape of your config, be sure to update the TS schema in `./src/types.ts`.

To add a new config to the project you'll need to add a new config `.json` file + add a new dev/build script.

1. Add new file. Add a new `.json` file in the `./config` folder and name it whatever you want. An easy way to do this would be to copy, paste, and rename an existing config.
2. Add new script. We need to add a new script that tells the project to build with the new config. Open `package.json` and add a new `dev:[file-name]` and `build:[file-name]` script named after your config under the `scripts` block. For example, if we named our new `./config` file `level-5.json`, then we would need to add two new scripts, one for `dev` and one for `build` like this.
    ```json
        "scripts": {
            "dev:default": "vite",
            "build:default": "vite build",

            "dev:level-5": "vite",
            "build:level-5": "vite build"
        },
    ```
    *`dev:level-5` & `build:level-5` are new*
3. Dev/build with your new config. Going back to the example above, if our config file was called `level-5.json`, and we have added the new scripts that match the name of the file, we can now:
   - **Development:** `npm run dev:level-5`
   - **Build:** `npm run build:level-5`

# Deploying on Exchange.art
Deploying the build as an NFT on [Exchange.art](https://exchange.art/terminallyminted/nfts) is easy. First, make sure you have recently ran a build.

### 1. Run Build
You can run a build using the `default.json` config by running `npm run build:default`. If you are using a custom config like mentioned above, make sure you use the right build command that points to your config.

### 2. Open Exchange.art
On Exchange.art, click **"Create"** and select **"Create NFT"**.
![create](/docs/create-nft.png)

### 3. Chose File
#### HTML File
When the Exchange.art UI asks for a file, click "Chose File" and select the `index.html` from your recent build in `./dist/[config-name]`.

#### Fallback File
For the "cover image", select the file that you want to show up as a fallback image such as in wallets or platforms that don't support the HTML version.

![create](/docs/upload.png)

### 4. Finalize & Mint
Continue to fill out the details for your NFT as you would any other submission.

**Note:** The HTML version won't show up while your NFT is in review. While in review, you will only see the cover image.







