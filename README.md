[![published](https://static.production.devnetcloud.com/codeexchange/assets/images/devnet-published.svg)](https://developer.cisco.com/codeexchange/github/repo/sloan58/seaquill)

<p align="center">
  <img src="./seaquill_logo.png" width="300">
</p>
<p align="center">
  <b>SeaQuill</b><br>
</p>
<hr>

## Use Case Description

SeaQuill is an [Electon](https://www.electronjs.org/) desktop app with a [React](https://reactjs.org) front end that integrates with Cisco Unified Communications Manager (UCM) via AXL API to send SQL queries and work with the results in a graphical interface.

If you've ever worked with the Cisco UCM database via the CLI platform to query for data, this app provides a way to do the same thing from your desktop while also letting you work with the output in a modern HTML interface.

## Installation

Being an [Electon](https://www.electronjs.org/) app, SeaQuill can be downloaded and installed on your local system using the available installers for Mac and Windows (x64) which can be found in the [Releases](https://github.com/sloan58/seaquill/releases) section of this repository. This is the quickest and easiest way to get started with SeaQuill. Simply download and install one of the packages and start using it.

If you'd like to work with the source code, you can clone this repository and run a development version of the app. Please follow these steps and open an issue if you have any trouble.

- `git clone https://github.com/sloan58/seaquill.git`
- `cd seaquill`
- `npm install && npm run electron-dev`

The source code will build and then launch a local SeaQuill Electron app that you can work with and modify as needed.

## Configuration

In order to use SeaQuill, you'll need an account in a UCM server that has an AXL API role assigned. If you're just testing in a lab environment, using the UCM Application Administrator account will also work.

You can add a new UCM server to SeaQuill using the UCM's menu item. Enter the details for your server address, auth information and schema version (corresponding to your UCM software version).

![image](https://user-images.githubusercontent.com/6303820/73370949-0299bc00-4283-11ea-8ee4-f743535c3335.png)

## Usage

###### Send queries to UCM

The SQL editor is where you can craft SQL queries that are sent off to Cisco UCM using the executeSQLQuery AXL API call. The select box above the query editor is multi-select, which means you can send the same SQL query to multiple UCM systems.

The query responses are displayed in an HTML table below the SQL editor window. Those results can be searched, sorted and exported as a .csv file.

![send queries](https://user-images.githubusercontent.com/6303820/73202513-318c2280-4109-11ea-98a4-41599d4bb827.png)

###### Export to CSV

After you recieve the results from a query, you can save the results into a .csv file by clicking on the 'Export' button above the results table.

![export](https://user-images.githubusercontent.com/6303820/73202888-0229e580-410a-11ea-80fb-f0751893b23c.png)

###### Save and Edit favorite queries

When you select the bookmark icon in the Query window, it will save the active SQL statement in the Favorites list for later. You can then edit and re-run those queries inside the Favorites view.

Edits to the queries are automatically saved and queries can be re-run by selecting the "play" icon to the right of the query.

![save and edit](https://user-images.githubusercontent.com/6303820/73202757-b9722c80-4109-11ea-9551-56b68f143cf1.png)

## Todo

- Add logo to app

## Author(s)

This project was written and maintained by the following individuals:

- [Marty Sloan](https://github.com/sloan58)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Bob Sloan for the sweet Seaquill logo
- [Creative Tim](https://www.creative-tim.com/) for the awesome UI template
