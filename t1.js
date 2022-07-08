// Next Highest Price
// Given a list of integers denoting stock prices for respective days, for each day we want to know when is the next day when the stock value has gone up
// E.g. [9, 30, 64, 47, 14, 40, 57, 26]
// Considering days indexed from 1
// Days [1, 2, 3, 4, 5, 6, 7,  8]
// Ans   [2, 3, 4, 7, 6, 7, -1, -1]
	


// [1, 2,  3,  4,  5,  6,  7,  8]
// [9, 30, 64, 47, 14, 40, 57, 26]
// [2, 3,  -1,  7,  6,  7, -1, -1]


// [31, 30, 29, 28, 51, 26, 25, 24, 50]


// Does themancompany use Shopify  ?

// curl -I https://www.themancompany.com/ | grep shopify
// HTTP/2 200 
// date: Mon, 06 Jul 2020 09:39:13 GMT
// content-type: text/html; charset=utf-8
// set-cookie: __cfduid=d488656781c1115d653b055dc6223ca591594028353; expires=Wed, 05-Aug-20 09:39:13 GMT; path=/; domain=.www.themancompany.com; HttpOnly; SameSite=Lax
// x-sorting-hat-podid: 82
// x-sorting-hat-shopid: 11882592
// x-shopid: 11882592
// x-shardid: 82
// content-language: en
// x-shopify-generated-cart-token: bb4552f67900f03c9921c727c51816dc
// vary: Accept
// strict-transport-security: max-age=7889238
// x-alternate-cache-key: cacheable:c6fa9e0dfb62377e2fa987bf243b9277
// x-cache: hit, server
// set-cookie: _y=a0f0f763-5384-4c3b-9393-c38a3ceac33a; Expires=Tue, 06-Jul-21 09:39:13 GMT; Domain=themancompany.com; Path=/
// x-shopify-stage: production
// ...



// Basically, we can check the x-shopify-* headers to be able to say that the merchant URL is hosted on shopify?

// Question

// Can you write a script to figure this out?

// Input CSV - List of URLs to be tested.

// URL
// https://www.themancompany.com
// https://sleepyowl.co
// https://manmatters.com



// Output - URLs and whether it is on  or not.


// URL
// is_shopify
// https://www.themancompany.com
// true
// https://sleepyowl.co
// true
// https://manmatters.com
// false



// const execSync = require("child_process").execSync;
 
// const output = execSync(`curl -I ${process.argv[2]} | grep shopify`, {
//  encoding: "utf-8",
// });
 
// console.log(output.includes("x-shopify-stage"));
 
// // node node.js "https://www.themancompany.com";


// Given the following two schemas

// statement

// statement_id
// user_id
// card_id
// amount
// statement_date
// created_at
// updated_at
// a1
// user1
// card1
// 1000
// 27-02-2020
// 2020-03-05 09:55:54
// 2020-03-05 09:55:54
// a4
// user2
// card5
// 2300
// 22-01-2019
// 2019-03-05 09:55:54
// 2019-03-05 09:55:54



// cards

// card_id
// card_name
// issuer_bank
// created_at
// updated_at
// card1
// Regalia gold
// HDFC
// 2020-01-05 09:55:54
// 2020-01-05 09:55:54


// Please write mysql queries for the following:
// How many statements have we got for HDFC bank in the last 30 days?
// Select COUNT(statement_id) as “RESULT”  from statement s LEFT JOIN cards c ON (s.card_id == c.card_id) where c.issuer_bank = “HDFC” and ( s.statement_date < fn() - 30 )
