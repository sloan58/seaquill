<p align="center">
  <img src="./seaquill_logo.png" width="300">
</p>
<p align="center">
  <b>SeaQuill</b><br>
</p>
<hr>

SeaQuill is an [Electon](https://www.electronjs.org/) desktop app with a [React](https://reactjs.org) front end that integrates with Cisco Unified Communications Manager via AXL API to send SQL queries and work with the results in a graphical interface.

## Getting Started

If you just want to use the app, you can download the latest client (Mac or Windows) from the releases section of this repo.

If you're interested in running this app locally or developing with it, please follow these steps:

- Clone this repository to your local development environment
- run `npm install && npm run electron-dev`

You should now have a local instance of SeaQuill running on your machine.

### Prerequisites

You need a Cisco Unified Communication Manager with an account that has AXL API access

### Screen Shots

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

- Add logo to Electron app

## Authors

- [Marty Sloan](https://github.com/sloan58)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Bob Sloan for the sweet Seaquill logo
- [Creative Tim](https://www.creative-tim.com/) for the awesome UI template
