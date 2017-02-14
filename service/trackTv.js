/**
 * Trakt TV V2 API interfacing.
 * Throughout the app the API from Trakt.TV is used to fetch content about shows and optionally the user's data
 *
 * For API docs: check here: http://docs.trakt.apiary.io/#
 */
app.factory('TraktTVv2', ["$q", "$http",
    function ($q, $http, $rootScope) {

        var APIkey = '39229f5c0530191f27ab06c27c1718cc6a752d05a71b67db8f521cb280942839';
        var endpoint = 'https://api-v2launch.trakt.tv/';


        var service = {
            /* what user is following*/
            getUserWatchlist: function (user, WatchedCallback) {
                var watchlist = "users/" + user + "/watchlist/shows";

                $http.get(endpoint + watchlist, {
                    headers: {
                        'trakt-api-key': APIkey,
                        'trakt-api-version': 2,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then(function (result) {
                    WatchedCallback(result.data);
                }, function (err) {
                    WatchedCallback(err);
                });
            },

            //https://api.trakt.tv/calendars/all/shows/2017-02-12/7?languages=en&status=returning%20series&countries=us
            getShowCalendar: function (userShows, callback) {

                // //get sunday date and send
                var calendar = "calendars/all/shows/2017-02-12/7?languages=en&status=returning%20series&countries=us";
                //var date = 2017-02-01;
                var duration = 7;

                $http.get(endpoint + calendar, {
                    headers: {
                        'trakt-api-key': APIkey,
                        'trakt-api-version': 2,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then(function (result) { 
                    var imdbId = [];
                    angular.forEach(userShows, function (value, key) {
                        imdbId.push(value.imdb);
                    }, imdbId); 

                    calendarData = [];
                    for (var i = 0; i < result.data.length; i++) { 
                        if (imdbId.indexOf(result.data[i].show.ids.imdb) != -1) {
                            calendarData.push(result.data[i]);
                            
                        }
                    } 
                    callback(calendarData);

                }, function (err) {
                    //WatchedCallback(err);
                });


            }

        };
        var calendar = [{
            "first_aired": "2017-02-12T01:00:00.000Z",
            "episode": {
                "season": 3,
                "number": 9,
                "title": "Double Date Danger",
                "ids": {
                    "trakt": 2425871,
                    "tvdb": 5868303,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Henry Danger",
                "year": 2014,
                "ids": {
                    "trakt": 79317,
                    "slug": "henry-danger",
                    "tvdb": 284114,
                    "imdb": "tt3596174",
                    "tmdb": 61852,
                    "tvrage": 43498
                }
            }
        }, {
            "first_aired": "2017-02-12T01:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 6,
                "title": "Hollywood Plane Landing",
                "ids": {
                    "trakt": 2483992,
                    "tvdb": 5948084,
                    "imdb": "tt6470604",
                    "tmdb": 1263722,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "MythBusters: The Search",
                "year": 2017,
                "ids": {
                    "trakt": 113765,
                    "slug": "mythbusters-the-search",
                    "tvdb": 320910,
                    "imdb": "tt5612722",
                    "tmdb": 69144,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-12T01:00:00.000Z",
            "episode": {
                "season": 38,
                "number": 14,
                "title": "Arlington Arts & Crafts | Ship Lap for a Ship Shape House",
                "ids": {
                    "trakt": 2486838,
                    "tvdb": 5953259,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "This Old House",
                "year": 1979,
                "ids": {
                    "trakt": 2380,
                    "slug": "this-old-house",
                    "tvdb": 77444,
                    "imdb": "tt0078701",
                    "tmdb": 2394,
                    "tvrage": 6338
                }
            }
        }, {
            "first_aired": "2017-02-12T01:00:00.000Z",
            "episode": {
                "season": 29,
                "number": 29,
                "title": "The Naked Truth",
                "ids": {
                    "trakt": 2494597,
                    "tvdb": 5966141,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Cops",
                "year": 1989,
                "ids": {
                    "trakt": 3647,
                    "slug": "cops",
                    "tvdb": 74709,
                    "imdb": "tt0096563",
                    "tmdb": 3670,
                    "tvrage": 3138
                }
            }
        }, {
            "first_aired": "2017-02-12T01:30:00.000Z",
            "episode": {
                "season": 15,
                "number": 14,
                "title": "Future House, Nick Offerman",
                "ids": {
                    "trakt": 2486844,
                    "tvdb": 5953263,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Ask This Old House",
                "year": 2002,
                "ids": {
                    "trakt": 23440,
                    "slug": "ask-this-old-house",
                    "tvdb": 74326,
                    "imdb": "tt0369081",
                    "tmdb": 23545,
                    "tvrage": 2657
                }
            }
        }, {
            "first_aired": "2017-02-12T01:30:00.000Z",
            "episode": {
                "season": 2,
                "number": 8,
                "title": "The Mason Experience",
                "ids": {
                    "trakt": 2488502,
                    "tvdb": 5956124,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Game Shakers",
                "year": 2015,
                "ids": {
                    "trakt": 101412,
                    "slug": "game-shakers",
                    "tvdb": 299779,
                    "imdb": "tt4711184",
                    "tmdb": 64264,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-12T01:30:00.000Z",
            "episode": {
                "season": 3,
                "number": 6,
                "title": "Ye Olde Hand Holde",
                "ids": {
                    "trakt": 2489812,
                    "tvdb": 5958881,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Nicky, Ricky, Dicky & Dawn",
                "year": 2014,
                "ids": {
                    "trakt": 80360,
                    "slug": "nicky-ricky-dicky-dawn",
                    "tvdb": 280882,
                    "imdb": "tt3596176",
                    "tmdb": 61854,
                    "tvrage": 38103
                }
            }
        }, {
            "first_aired": "2017-02-12T02:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 19,
                "title": "Tricked Out Triumph Part 1",
                "ids": {
                    "trakt": 2482275,
                    "tvdb": 5947182,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Counting Cars",
                "year": 2012,
                "ids": {
                    "trakt": 45417,
                    "slug": "counting-cars",
                    "tvdb": 261181,
                    "imdb": "tt2338096",
                    "tmdb": 45669,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-12T02:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 20,
                "title": "Tricked Out Triumph Part 2",
                "ids": {
                    "trakt": 2482276,
                    "tvdb": 5947184,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Counting Cars",
                "year": 2012,
                "ids": {
                    "trakt": 45417,
                    "slug": "counting-cars",
                    "tvdb": 261181,
                    "imdb": "tt2338096",
                    "tmdb": 45669,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-12T02:00:00.000Z",
            "episode": {
                "season": 7,
                "number": 5,
                "title": "Big Money Bike",
                "ids": {
                    "trakt": 2484055,
                    "tvdb": 5967309,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Counting Cars",
                "year": 2012,
                "ids": {
                    "trakt": 45417,
                    "slug": "counting-cars",
                    "tvdb": 261181,
                    "imdb": "tt2338096",
                    "tmdb": 45669,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-12T02:00:00.000Z",
            "episode": {
                "season": 7,
                "number": 11,
                "title": "Going for Broke",
                "ids": {
                    "trakt": 2489563,
                    "tvdb": 5958241,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Welcome to Sweetie Pie's",
                "year": 2011,
                "ids": {
                    "trakt": 43674,
                    "slug": "welcome-to-sweetie-pie-s",
                    "tvdb": 254248,
                    "imdb": "tt2117780",
                    "tmdb": 43916,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-12T02:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 17,
                "title": "02.11.17",
                "ids": {
                    "trakt": 2494249,
                    "tvdb": 5965761,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Live PD",
                "year": 2016,
                "ids": {
                    "trakt": 112356,
                    "slug": "live-pd",
                    "tvdb": 318451,
                    "imdb": null,
                    "tmdb": 68430,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-12T02:00:00.000Z",
            "episode": {
                "season": 7,
                "number": 6,
                "title": "'68 Killer Camaro",
                "ids": {
                    "trakt": 2495352,
                    "tvdb": 5967311,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Counting Cars",
                "year": 2012,
                "ids": {
                    "trakt": 45417,
                    "slug": "counting-cars",
                    "tvdb": 261181,
                    "imdb": "tt2338096",
                    "tmdb": 45669,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-12T03:00:00.000Z",
            "episode": {
                "season": 0,
                "number": 4,
                "title": "Fight Camp Techniques",
                "ids": {
                    "trakt": 2122123,
                    "tvdb": 5953619,
                    "imdb": null,
                    "tmdb": 0,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Into the Badlands",
                "year": 2015,
                "ids": {
                    "trakt": 82217,
                    "slug": "into-the-badlands",
                    "tvdb": 289079,
                    "imdb": "tt3865236",
                    "tmdb": 47450,
                    "tvrage": 49739
                }
            }
        }, {
            "first_aired": "2017-02-12T03:00:00.000Z",
            "episode": {
                "season": 7,
                "number": 8,
                "title": "Fear Lives Here",
                "ids": {
                    "trakt": 2325741,
                    "tvdb": 5730666,
                    "imdb": null,
                    "tmdb": 1078260,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The Dead Files",
                "year": 2011,
                "ids": {
                    "trakt": 40777,
                    "slug": "the-dead-files",
                    "tvdb": 252133,
                    "imdb": "tt2012511",
                    "tmdb": 40971,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-12T03:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 3,
                "title": "All in the Family",
                "ids": {
                    "trakt": 2483186,
                    "tvdb": 5947052,
                    "imdb": null,
                    "tmdb": 1262488,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Detroit Steel",
                "year": 2017,
                "ids": {
                    "trakt": 115956,
                    "slug": "detroit-steel",
                    "tvdb": 322732,
                    "imdb": "tt6403968",
                    "tmdb": 69961,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-12T03:00:00.000Z",
            "episode": {
                "season": 30,
                "number": 25,
                "title": "Murder in Beverly Hills",
                "ids": {
                    "trakt": 2486570,
                    "tvdb": 5952383,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "48 Hours Mystery",
                "year": 1988,
                "ids": {
                    "trakt": 3696,
                    "slug": "48-hours-mystery",
                    "tvdb": 138551,
                    "imdb": "tt0271894",
                    "tmdb": 3719,
                    "tvrage": 7238
                }
            }
        }, {
            "first_aired": "2017-02-12T03:00:00.000Z",
            "episode": {
                "season": 30,
                "number": 26,
                "title": "The Strange Life of Dr. Schwartz",
                "ids": {
                    "trakt": 2486571,
                    "tvdb": 5952384,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "48 Hours Mystery",
                "year": 1988,
                "ids": {
                    "trakt": 3696,
                    "slug": "48-hours-mystery",
                    "tvdb": 138551,
                    "imdb": "tt0271894",
                    "tmdb": 3719,
                    "tvrage": 7238
                }
            }
        }, {
            "first_aired": "2017-02-12T03:00:00.000Z",
            "episode": {
                "season": 5,
                "number": 6,
                "title": "380 Sq. Ft. Derby House",
                "ids": {
                    "trakt": 2487588,
                    "tvdb": 5953669,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Tiny House Nation",
                "year": 2014,
                "ids": {
                    "trakt": 78677,
                    "slug": "tiny-house-nation",
                    "tvdb": 283215,
                    "imdb": "tt3869500",
                    "tmdb": 62415,
                    "tvrage": 43479
                }
            }
        }, {
            "first_aired": "2017-02-12T03:00:00.000Z",
            "episode": {
                "season": 3,
                "number": 2,
                "title": "Race Against Time",
                "ids": {
                    "trakt": 2490710,
                    "tvdb": 5961191,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dr. Jeff: Rocky Mountain Vet",
                "year": 2015,
                "ids": {
                    "trakt": 100595,
                    "slug": "dr-jeff-rocky-mountain-vet",
                    "tvdb": 298367,
                    "imdb": "tt4796084",
                    "tmdb": 62997,
                    "tvrage": 49939
                }
            }
        }, {
            "first_aired": "2017-02-12T03:00:00.000Z",
            "episode": {
                "season": 27,
                "number": 5,
                "title": "Extended Stay Wichita: The Keeper",
                "ids": {
                    "trakt": 2494866,
                    "tvdb": 5966553,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Lockup",
                "year": 2005,
                "ids": {
                    "trakt": 8068,
                    "slug": "lockup",
                    "tvdb": 114011,
                    "imdb": "tt0446847",
                    "tmdb": 8114,
                    "tvrage": 22203
                }
            }
        }, {
            "first_aired": "2017-02-12T04:30:00.000Z",
            "episode": {
                "season": 42,
                "number": 14,
                "title": "Alec Baldwin/Ed Sheeran",
                "ids": {
                    "trakt": 2482286,
                    "tvdb": 5946823,
                    "imdb": null,
                    "tmdb": 1266621,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Saturday Night Live",
                "year": 1975,
                "ids": {
                    "trakt": 1656,
                    "slug": "saturday-night-live",
                    "tvdb": 76177,
                    "imdb": "tt0072562",
                    "tmdb": 1667,
                    "tvrage": 5098
                }
            }
        }, {
            "first_aired": "2017-02-12T12:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 14,
                "title": "FiendBot",
                "ids": {
                    "trakt": 2495259,
                    "tvdb": 5967041,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Sonic Boom",
                "year": 2014,
                "ids": {
                    "trakt": 80121,
                    "slug": "sonic-boom",
                    "tvdb": 280103,
                    "imdb": "tt3232262",
                    "tmdb": 62211,
                    "tvrage": 46124
                }
            }
        }, {
            "first_aired": "2017-02-12T14:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 24,
                "title": "The Tale of Tiger Claw",
                "ids": {
                    "trakt": 2471031,
                    "tvdb": 5928930,
                    "imdb": null,
                    "tmdb": 1264141,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Teenage Mutant Ninja Turtles",
                "year": 2012,
                "ids": {
                    "trakt": 51490,
                    "slug": "teenage-mutant-ninja-turtles-2012",
                    "tvdb": 261451,
                    "imdb": "tt1877889",
                    "tmdb": 51817,
                    "tvrage": 27772
                }
            }
        }, {
            "first_aired": "2017-02-12T14:00:00.000Z",
            "episode": {
                "season": 39,
                "number": 20,
                "title": "S39E20",
                "ids": {
                    "trakt": 2493929,
                    "tvdb": 5965345,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "CBS News Sunday Morning",
                "year": 2017,
                "ids": {
                    "trakt": 4002,
                    "slug": "cbs-news-sunday-morning",
                    "tvdb": 264537,
                    "imdb": "tt0165001",
                    "tmdb": 4026,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-12T15:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 12,
                "title": "Writers",
                "ids": {
                    "trakt": 2487247,
                    "tvdb": 5953704,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Close Up With The Hollywood Reporter",
                "year": 2015,
                "ids": {
                    "trakt": 100048,
                    "slug": "close-up-with-the-hollywood-reporter",
                    "tvdb": 297128,
                    "imdb": "tt4931888",
                    "tmdb": 63498,
                    "tvrage": 49761
                }
            }
        }, {
            "first_aired": "2017-02-12T15:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 7,
                "title": "February 12, 2017",
                "ids": {
                    "trakt": 2487159,
                    "tvdb": 5954005,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Meet the Press",
                "year": 1947,
                "ids": {
                    "trakt": 4472,
                    "slug": "meet-the-press",
                    "tvdb": 74657,
                    "imdb": null,
                    "tmdb": 4496,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-12T16:00:00.000Z",
            "episode": {
                "season": 2017,
                "number": 7,
                "title": "February 12, 2017",
                "ids": {
                    "trakt": 2487531,
                    "tvdb": 5954013,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "This Week",
                "year": 1981,
                "ids": {
                    "trakt": 1962,
                    "slug": "this-week",
                    "tvdb": 71397,
                    "imdb": null,
                    "tmdb": 1975,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-12T23:00:00.000Z",
            "episode": {
                "season": 19,
                "number": 11,
                "title": "Teresa Kotomski",
                "ids": {
                    "trakt": 2491258,
                    "tvdb": 5962022,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Snapped",
                "year": 2004,
                "ids": {
                    "trakt": 10135,
                    "slug": "snapped",
                    "tvdb": 74921,
                    "imdb": "tt0429434",
                    "tmdb": 10184,
                    "tvrage": 5233
                }
            }
        }, {
            "first_aired": "2017-02-12T23:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 43,
                "title": "Feb 12 Sun",
                "ids": {
                    "trakt": 2488918,
                    "tvdb": 5956444,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "NBC Nightly News",
                "year": 1970,
                "ids": {
                    "trakt": 823,
                    "slug": "nbc-nightly-news",
                    "tvdb": 139911,
                    "imdb": "tt0231035",
                    "tmdb": 826,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-12T23:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 43,
                "title": "Feb 12 Sun",
                "ids": {
                    "trakt": 2490335,
                    "tvdb": 5959191,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "CBS Evening News",
                "year": 1962,
                "ids": {
                    "trakt": 635,
                    "slug": "cbs-evening-news",
                    "tvdb": 74468,
                    "imdb": null,
                    "tmdb": 637,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-13T00:00:00.000Z",
            "episode": {
                "season": 49,
                "number": 20,
                "title": "February 12, 2017",
                "ids": {
                    "trakt": 2433536,
                    "tvdb": 5948364,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "60 Minutes",
                "year": 1968,
                "ids": {
                    "trakt": 649,
                    "slug": "60-minutes",
                    "tvdb": 73290,
                    "imdb": "tt0123338",
                    "tmdb": 651,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-13T00:00:00.000Z",
            "episode": {
                "season": 27,
                "number": 13,
                "title": "Cats, Playgrounds, and Laughing Babies",
                "ids": {
                    "trakt": 2445076,
                    "tvdb": 5893818,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "AFV",
                "year": 1989,
                "ids": {
                    "trakt": 4424,
                    "slug": "afv",
                    "tvdb": 76235,
                    "imdb": "tt0098740",
                    "tmdb": 4448,
                    "tvrage": 2584
                }
            }
        }, {
            "first_aired": "2017-02-13T01:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 59,
                "title": "The 59th Annual Grammy Awards",
                "ids": {
                    "trakt": 2357507,
                    "tvdb": 5772271,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Grammy Awards",
                "year": 1959,
                "ids": {
                    "trakt": 25185,
                    "slug": "grammy-awards",
                    "tvdb": 85401,
                    "imdb": null,
                    "tmdb": 25298,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-13T01:00:00.000Z",
            "episode": {
                "season": 28,
                "number": 14,
                "title": "Fatzcarraldo",
                "ids": {
                    "trakt": 2469971,
                    "tvdb": 5927671,
                    "imdb": "tt5847490",
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Simpsons",
                "year": 1989,
                "ids": {
                    "trakt": 455,
                    "slug": "the-simpsons",
                    "tvdb": 71663,
                    "imdb": "tt0096697",
                    "tmdb": 456,
                    "tvrage": 6190
                }
            }
        }, {
            "first_aired": "2017-02-13T01:00:00.000Z",
            "episode": {
                "season": 9,
                "number": 13,
                "title": "If These Woods Could Talk",
                "ids": {
                    "trakt": 2482914,
                    "tvdb": 5946923,
                    "imdb": null,
                    "tmdb": 1266620,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The Real Housewives of Atlanta",
                "year": 2008,
                "ids": {
                    "trakt": 17302,
                    "slug": "the-real-housewives-of-atlanta",
                    "tvdb": 84159,
                    "imdb": "tt1252370",
                    "tmdb": 17380,
                    "tvrage": 19672
                }
            }
        }, {
            "first_aired": "2017-02-13T01:00:00.000Z",
            "episode": {
                "season": 12,
                "number": 7,
                "title": "Guy's Chocolate Games",
                "ids": {
                    "trakt": 2488724,
                    "tvdb": 5956366,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Guy's Grocery Games",
                "year": 2013,
                "ids": {
                    "trakt": 73539,
                    "slug": "guy-s-grocery-games",
                    "tvdb": 274453,
                    "imdb": "tt3165150",
                    "tmdb": 62595,
                    "tvrage": 37019
                }
            }
        }, {
            "first_aired": "2017-02-13T01:30:00.000Z",
            "episode": {
                "season": 1,
                "number": 12,
                "title": "The Quest for Craig",
                "ids": {
                    "trakt": 2260257,
                    "tvdb": 5644874,
                    "imdb": null,
                    "tmdb": 1223006,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Son of Zorn",
                "year": 2016,
                "ids": {
                    "trakt": 107774,
                    "slug": "son-of-zorn",
                    "tvdb": 311817,
                    "imdb": "tt4798814",
                    "tmdb": 66844,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-13T02:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 4,
                "title": "A Flash of Light",
                "ids": {
                    "trakt": 2358139,
                    "tvdb": 5773110,
                    "imdb": "tt5314810",
                    "tmdb": 1245895,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Homeland",
                "year": 2011,
                "ids": {
                    "trakt": 1398,
                    "slug": "homeland",
                    "tvdb": 247897,
                    "imdb": "tt1796960",
                    "tmdb": 1407,
                    "tvrage": 27811
                }
            }
        }, {
            "first_aired": "2017-02-13T02:00:00.000Z",
            "episode": {
                "season": 15,
                "number": 12,
                "title": "Peter's Def Jam",
                "ids": {
                    "trakt": 2413414,
                    "tvdb": 5927672,
                    "imdb": null,
                    "tmdb": 1267433,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Family Guy",
                "year": 1999,
                "ids": {
                    "trakt": 1425,
                    "slug": "family-guy",
                    "tvdb": 75978,
                    "imdb": "tt0182576",
                    "tmdb": 1434,
                    "tvrage": 3506
                }
            }
        }, {
            "first_aired": "2017-02-13T02:00:00.000Z",
            "episode": {
                "season": 7,
                "number": 9,
                "title": "Rock in the Road",
                "ids": {
                    "trakt": 2433573,
                    "tvdb": 5878233,
                    "imdb": "tt5207746",
                    "tmdb": 1248326,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The Walking Dead",
                "year": 2010,
                "ids": {
                    "trakt": 1393,
                    "slug": "the-walking-dead",
                    "tvdb": 153021,
                    "imdb": "tt1520211",
                    "tmdb": 1402,
                    "tvrage": 25056
                }
            }
        }, {
            "first_aired": "2017-02-13T02:00:00.000Z",
            "episode": {
                "season": 10,
                "number": 7,
                "title": "Facing Your Fears",
                "ids": {
                    "trakt": 2448681,
                    "tvdb": 5898805,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Worst Cooks in America",
                "year": 2010,
                "ids": {
                    "trakt": 31644,
                    "slug": "worst-cooks-in-america",
                    "tvdb": 134441,
                    "imdb": "tt1570957",
                    "tmdb": 31783,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-13T02:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 3,
                "title": "XXXI",
                "ids": {
                    "trakt": 2481600,
                    "tvdb": 5944780,
                    "imdb": "tt5251478",
                    "tmdb": 1236813,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Black Sails",
                "year": 2014,
                "ids": {
                    "trakt": 47374,
                    "slug": "black-sails",
                    "tvdb": 262407,
                    "imdb": "tt2375692",
                    "tmdb": 47665,
                    "tvrage": 32725
                }
            }
        }, {
            "first_aired": "2017-02-13T02:00:00.000Z",
            "episode": {
                "season": 9,
                "number": 6,
                "title": "Bright Lights and Bigfoots",
                "ids": {
                    "trakt": 2482865,
                    "tvdb": 5946797,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Finding Bigfoot",
                "year": 2011,
                "ids": {
                    "trakt": 39703,
                    "slug": "finding-bigfoot",
                    "tvdb": 249235,
                    "imdb": "tt1948830",
                    "tmdb": 39882,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-13T02:00:00.000Z",
            "episode": {
                "season": 9,
                "number": 7,
                "title": "Bigfoot Town",
                "ids": {
                    "trakt": 2482866,
                    "tvdb": 5946799,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Finding Bigfoot",
                "year": 2011,
                "ids": {
                    "trakt": 39703,
                    "slug": "finding-bigfoot",
                    "tvdb": 249235,
                    "imdb": "tt1948830",
                    "tmdb": 39882,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-13T02:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 16,
                "title": "Blood is Thicker than Winter",
                "ids": {
                    "trakt": 2489028,
                    "tvdb": 5957575,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Alaska: The Last Frontier",
                "year": 2011,
                "ids": {
                    "trakt": 65190,
                    "slug": "alaska-the-last-frontier",
                    "tvdb": 254738,
                    "imdb": "tt1877010",
                    "tmdb": 63313,
                    "tvrage": 30505
                }
            }
        }, {
            "first_aired": "2017-02-13T02:00:00.000Z",
            "episode": {
                "season": 5,
                "number": 16,
                "title": "Clowning Around",
                "ids": {
                    "trakt": 2495199,
                    "tvdb": 5966883,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Jail",
                "year": 2007,
                "ids": {
                    "trakt": 12719,
                    "slug": "jail",
                    "tvdb": 83051,
                    "imdb": "tt1128727",
                    "tmdb": 12775,
                    "tvrage": 17307
                }
            }
        }, {
            "first_aired": "2017-02-13T02:30:00.000Z",
            "episode": {
                "season": 7,
                "number": 9,
                "title": "Bob Actually",
                "ids": {
                    "trakt": 2463178,
                    "tvdb": 5934095,
                    "imdb": null,
                    "tmdb": 1268946,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Bob's Burgers",
                "year": 2011,
                "ids": {
                    "trakt": 32585,
                    "slug": "bob-s-burgers",
                    "tvdb": 194031,
                    "imdb": "tt1561755",
                    "tmdb": 32726,
                    "tvrage": 24607
                }
            }
        }, {
            "first_aired": "2017-02-13T03:00:00.000Z",
            "episode": {
                "season": 3,
                "number": 9,
                "title": "O, Farewell, Honest Soldier",
                "ids": {
                    "trakt": 2398610,
                    "tvdb": 5831942,
                    "imdb": "tt6162104",
                    "tmdb": 1258313,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The Royals",
                "year": 2015,
                "ids": {
                    "trakt": 82130,
                    "slug": "the-royals-2015",
                    "tvdb": 288963,
                    "imdb": "tt3597912",
                    "tmdb": 62137,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-13T03:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 1,
                "title": "All I Ever Wanted",
                "ids": {
                    "trakt": 2406731,
                    "tvdb": 5843173,
                    "imdb": "tt5321378",
                    "tmdb": 1250466,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Girls",
                "year": 2012,
                "ids": {
                    "trakt": 42059,
                    "slug": "girls",
                    "tvdb": 220411,
                    "imdb": "tt1723816",
                    "tmdb": 42282,
                    "tvrage": 30124
                }
            }
        }, {
            "first_aired": "2017-02-13T03:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 9,
                "title": "Rock in the Road",
                "ids": {
                    "trakt": 2490321,
                    "tvdb": 5959408,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Talking Dead",
                "year": 2011,
                "ids": {
                    "trakt": 41805,
                    "slug": "talking-dead",
                    "tvdb": 252861,
                    "imdb": "tt2089467",
                    "tmdb": 42021,
                    "tvrage": 29695
                }
            }
        }, {
            "first_aired": "2017-02-13T04:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 1,
                "title": "Episode 90",
                "ids": {
                    "trakt": 2407202,
                    "tvdb": 5843727,
                    "imdb": null,
                    "tmdb": 1268737,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Last Week Tonight with John Oliver",
                "year": 2014,
                "ids": {
                    "trakt": 60267,
                    "slug": "last-week-tonight-with-john-oliver",
                    "tvdb": 278518,
                    "imdb": "tt3530232",
                    "tmdb": 60694,
                    "tvrage": 40882
                }
            }
        }, {
            "first_aired": "2017-02-13T05:01:00.000Z",
            "episode": {
                "season": 6,
                "number": 9,
                "title": "Karate Kustomer",
                "ids": {
                    "trakt": 2493582,
                    "tvdb": 5964682,
                    "imdb": null,
                    "tmdb": 1267644,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Comic Book Men",
                "year": 2012,
                "ids": {
                    "trakt": 41789,
                    "slug": "comic-book-men",
                    "tvdb": 254990,
                    "imdb": "tt2174367",
                    "tmdb": 42004,
                    "tvrage": 30604
                }
            }
        }, {
            "first_aired": "2017-02-13T05:35:00.000Z",
            "episode": {
                "season": 2,
                "number": 127,
                "title": "Ice Cube, Ike Barinholtz, Steve Aoki & Louis Tomlinson",
                "ids": {
                    "trakt": 2493358,
                    "tvdb": 5964399,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Late Late Show with James Corden",
                "year": 2015,
                "ids": {
                    "trakt": 96473,
                    "slug": "the-late-late-show-with-james-corden",
                    "tvdb": 292421,
                    "imdb": "tt4280606",
                    "tmdb": 62223,
                    "tvrage": 44904
                }
            }
        }, {
            "first_aired": "2017-02-13T05:35:00.000Z",
            "episode": {
                "season": 2017,
                "number": 21,
                "title": "John Oliver, Zosia Mamet, Brann Dailor",
                "ids": {
                    "trakt": 2493364,
                    "tvdb": 5964395,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Late Night with Seth Meyers",
                "year": 2014,
                "ids": {
                    "trakt": 75199,
                    "slug": "late-night-with-seth-meyers",
                    "tvdb": 270262,
                    "imdb": "tt3513388",
                    "tmdb": 61818,
                    "tvrage": 35852
                }
            }
        }, {
            "first_aired": "2017-02-13T11:00:00.000Z",
            "episode": {
                "season": 11,
                "number": 21,
                "title": "Most Bizarre Supervillains (GAME)",
                "ids": {
                    "trakt": 2488199,
                    "tvdb": 5954607,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Good Mythical Morning",
                "year": 2012,
                "ids": {
                    "trakt": 94860,
                    "slug": "good-mythical-morning",
                    "tvdb": 290686,
                    "imdb": "tt4087032",
                    "tmdb": 65701,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-13T11:00:00.000Z",
            "episode": {
                "season": 0,
                "number": 843,
                "title": "Let's Play: Job Simulator - Good Mythical More",
                "ids": {
                    "trakt": 2494131,
                    "tvdb": 5965548,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Good Mythical Morning",
                "year": 2012,
                "ids": {
                    "trakt": 94860,
                    "slug": "good-mythical-morning",
                    "tvdb": 290686,
                    "imdb": "tt4087032",
                    "tmdb": 65701,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-13T16:00:00.000Z",
            "episode": {
                "season": 45,
                "number": 98,
                "title": "2017-02-13",
                "ids": {
                    "trakt": 2489008,
                    "tvdb": 5919494,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Price Is Right",
                "year": 1972,
                "ids": {
                    "trakt": 2038,
                    "slug": "the-price-is-right",
                    "tvdb": 77072,
                    "imdb": "tt0068120",
                    "tmdb": 2051,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-13T16:15:00.000Z",
            "episode": {
                "season": 30,
                "number": 286,
                "title": "Ep. #7523",
                "ids": {
                    "trakt": 2476554,
                    "tvdb": 5936310,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Bold and the Beautiful",
                "year": 1987,
                "ids": {
                    "trakt": 6608,
                    "slug": "the-bold-and-the-beautiful",
                    "tvdb": 79838,
                    "imdb": "tt0092325",
                    "tmdb": 6647,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-13T17:30:00.000Z",
            "episode": {
                "season": 44,
                "number": 115,
                "title": "Episode 11114 - February 13, 2017",
                "ids": {
                    "trakt": 2476544,
                    "tvdb": 5936269,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Young and the Restless",
                "year": 1973,
                "ids": {
                    "trakt": 1049,
                    "slug": "the-young-and-the-restless",
                    "tvdb": 70328,
                    "imdb": "tt0069658",
                    "tmdb": 1054,
                    "tvrage": 6318
                }
            }
        }, {
            "first_aired": "2017-02-13T18:00:00.000Z",
            "episode": {
                "season": 52,
                "number": 102,
                "title": "Monday Febuary 13, 2017",
                "ids": {
                    "trakt": 2494521,
                    "tvdb": 5966265,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Days of Our Lives",
                "year": 1965,
                "ids": {
                    "trakt": 876,
                    "slug": "days-of-our-lives",
                    "tvdb": 70366,
                    "imdb": "tt0058796",
                    "tmdb": 881,
                    "tvrage": 3256
                }
            }
        }, {
            "first_aired": "2017-02-13T19:00:00.000Z",
            "episode": {
                "season": 54,
                "number": 215,
                "title": "#13745",
                "ids": {
                    "trakt": 2474277,
                    "tvdb": 5933946,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "General Hospital",
                "year": 1963,
                "ids": {
                    "trakt": 982,
                    "slug": "general-hospital",
                    "tvdb": 75332,
                    "imdb": "tt0056758",
                    "tmdb": 987,
                    "tvrage": 3653
                }
            }
        }, {
            "first_aired": "2017-02-13T20:00:00.000Z",
            "episode": {
                "season": 15,
                "number": 99,
                "title": "he Girl in the Box: Kala Brown's Story of Being Abducted by a Suspected Serial Killer",
                "ids": {
                    "trakt": 2494625,
                    "tvdb": 5966247,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dr. Phil",
                "year": 2002,
                "ids": {
                    "trakt": 4628,
                    "slug": "dr-phil",
                    "tvdb": 71424,
                    "imdb": "tt0329824",
                    "tmdb": 4652,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-13T21:00:00.000Z",
            "episode": {
                "season": 14,
                "number": 102,
                "title": "Khloe Kardashian, Lin-Manuel Miranda",
                "ids": {
                    "trakt": 2486151,
                    "tvdb": 5951972,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Ellen DeGeneres Show",
                "year": 2003,
                "ids": {
                    "trakt": 561,
                    "slug": "the-ellen-degeneres-show",
                    "tvdb": 72194,
                    "imdb": "tt0379623",
                    "tmdb": 562,
                    "tvrage": 5750
                }
            }
        }, {
            "first_aired": "2017-02-13T22:00:00.000Z",
            "episode": {
                "season": 21,
                "number": 132,
                "title": "Daughter Steals $10K From Mother?!; Hawaiian Cash Flow Fail!",
                "ids": {
                    "trakt": 2493593,
                    "tvdb": 5964706,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Judge Judy",
                "year": 1996,
                "ids": {
                    "trakt": 3917,
                    "slug": "judge-judy",
                    "tvdb": 71221,
                    "imdb": "tt0115227",
                    "tmdb": 3940,
                    "tvrage": 7960
                }
            }
        }, {
            "first_aired": "2017-02-13T22:00:00.000Z",
            "episode": {
                "season": 21,
                "number": 133,
                "title": "Heartbreaking Mother/Daughter Identity Theft; Deer Takes Another Car Down!",
                "ids": {
                    "trakt": 2493594,
                    "tvdb": 5964707,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Judge Judy",
                "year": 1996,
                "ids": {
                    "trakt": 3917,
                    "slug": "judge-judy",
                    "tvdb": 71221,
                    "imdb": "tt0115227",
                    "tmdb": 3940,
                    "tvrage": 7960
                }
            }
        }, {
            "first_aired": "2017-02-13T22:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 31,
                "title": "Episode 31",
                "ids": {
                    "trakt": 2424429,
                    "tvdb": 5867014,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Pardon the Interruption",
                "year": 2001,
                "ids": {
                    "trakt": 1889,
                    "slug": "pardon-the-interruption",
                    "tvdb": 266681,
                    "imdb": "tt0307800",
                    "tmdb": 1902,
                    "tvrage": 4774
                }
            }
        }, {
            "first_aired": "2017-02-13T23:00:00.000Z",
            "episode": {
                "season": 42,
                "number": 31,
                "title": "February 13, 2017",
                "ids": {
                    "trakt": 2461954,
                    "tvdb": 5918426,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "PBS NewsHour",
                "year": 1983,
                "ids": {
                    "trakt": 1644,
                    "slug": "pbs-newshour",
                    "tvdb": 81388,
                    "imdb": "tt0247880",
                    "tmdb": 1655,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-13T23:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 44,
                "title": "Feb 13 Mon",
                "ids": {
                    "trakt": 2488919,
                    "tvdb": 5956493,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "NBC Nightly News",
                "year": 1970,
                "ids": {
                    "trakt": 823,
                    "slug": "nbc-nightly-news",
                    "tvdb": 139911,
                    "imdb": "tt0231035",
                    "tmdb": 826,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-13T23:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 44,
                "title": "Feb 13 Mon",
                "ids": {
                    "trakt": 2490336,
                    "tvdb": 5959192,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "CBS Evening News",
                "year": 1962,
                "ids": {
                    "trakt": 635,
                    "slug": "cbs-evening-news",
                    "tvdb": 74468,
                    "imdb": null,
                    "tmdb": 637,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-13T23:30:00.000Z",
            "episode": {
                "season": 34,
                "number": 111,
                "title": "Episode 111",
                "ids": {
                    "trakt": 2491379,
                    "tvdb": 5962232,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Wheel of Fortune",
                "year": 1983,
                "ids": {
                    "trakt": 2760,
                    "slug": "wheel-of-fortune",
                    "tvdb": 76573,
                    "imdb": "tt0072584",
                    "tmdb": 2778,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T00:00:00.000Z",
            "episode": {
                "season": 2017,
                "number": 31,
                "title": "S33 College Championship Quarterfinal Game 1",
                "ids": {
                    "trakt": 2484024,
                    "tvdb": 5948131,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Jeopardy!",
                "year": 1964,
                "ids": {
                    "trakt": 2893,
                    "slug": "jeopardy",
                    "tvdb": 77075,
                    "imdb": "tt0159881",
                    "tmdb": 2912,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T00:30:00.000Z",
            "episode": {
                "season": 1,
                "number": 79,
                "title": "Episode 79",
                "ids": {
                    "trakt": 2451478,
                    "tvdb": 5902558,
                    "imdb": null,
                    "tmdb": 1251121,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Vice News Tonight",
                "year": 2016,
                "ids": {
                    "trakt": 111550,
                    "slug": "vice-news-tonight",
                    "tvdb": 317479,
                    "imdb": "tt6329790",
                    "tmdb": 67584,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T00:30:00.000Z",
            "episode": {
                "season": 2,
                "number": 32,
                "title": "Mathmagic",
                "ids": {
                    "trakt": 2480884,
                    "tvdb": 5942778,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Star vs. the Forces of Evil",
                "year": 2015,
                "ids": {
                    "trakt": 80083,
                    "slug": "star-vs-the-forces-of-evil",
                    "tvdb": 282994,
                    "imdb": "tt2758770",
                    "tmdb": 61923,
                    "tvrage": 47307
                }
            }
        }, {
            "first_aired": "2017-02-14T00:30:00.000Z",
            "episode": {
                "season": 5,
                "number": 14,
                "title": "The Vase",
                "ids": {
                    "trakt": 2488565,
                    "tvdb": 5956596,
                    "imdb": null,
                    "tmdb": 1267672,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The Amazing World of Gumball",
                "year": 2011,
                "ids": {
                    "trakt": 37448,
                    "slug": "the-amazing-world-of-gumball",
                    "tvdb": 248482,
                    "imdb": "tt1942683",
                    "tmdb": 37606,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T01:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 3,
                "title": "2:00 P.M. - 3:00 P.M.",
                "ids": {
                    "trakt": 2355487,
                    "tvdb": 5903151,
                    "imdb": "tt5350140",
                    "tmdb": 1263948,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "24: Legacy",
                "year": 2017,
                "ids": {
                    "trakt": 107716,
                    "slug": "24-legacy",
                    "tvdb": 311787,
                    "imdb": "tt5345490",
                    "tmdb": 66789,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T01:00:00.000Z",
            "episode": {
                "season": 3,
                "number": 7,
                "title": "Mobile App Cookies",
                "ids": {
                    "trakt": 2441782,
                    "tvdb": 5888868,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Kids Baking Championship",
                "year": 2015,
                "ids": {
                    "trakt": 95756,
                    "slug": "kids-baking-championship",
                    "tvdb": 291938,
                    "imdb": "tt4328676",
                    "tmdb": 61987,
                    "tvrage": 47596
                }
            }
        }, {
            "first_aired": "2017-02-14T01:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 12,
                "title": "Luthors",
                "ids": {
                    "trakt": 2452873,
                    "tvdb": 5904620,
                    "imdb": "tt5957848",
                    "tmdb": 1260843,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Supergirl",
                "year": 2015,
                "ids": {
                    "trakt": 99046,
                    "slug": "supergirl",
                    "tvdb": 295759,
                    "imdb": "tt4016454",
                    "tmdb": 62688,
                    "tvrage": 44824
                }
            }
        }, {
            "first_aired": "2017-02-14T01:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 7,
                "title": "How Are Thou Fallen",
                "ids": {
                    "trakt": 2455475,
                    "tvdb": 5907299,
                    "imdb": "tt5584064",
                    "tmdb": 1258830,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Shadowhunters",
                "year": 2016,
                "ids": {
                    "trakt": 99113,
                    "slug": "shadowhunters",
                    "tvdb": 295837,
                    "imdb": "tt4145054",
                    "tmdb": 63210,
                    "tvrage": 48427
                }
            }
        }, {
            "first_aired": "2017-02-14T01:00:00.000Z",
            "episode": {
                "season": 21,
                "number": 7,
                "title": "Week 7",
                "ids": {
                    "trakt": 2465688,
                    "tvdb": 5962665,
                    "imdb": null,
                    "tmdb": 1265470,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The Bachelor",
                "year": 2002,
                "ids": {
                    "trakt": 354,
                    "slug": "the-bachelor",
                    "tvdb": 70869,
                    "imdb": "tt0313038",
                    "tmdb": 355,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T01:00:00.000Z",
            "episode": {
                "season": 15,
                "number": 7,
                "title": "I Have No Time For Anyone's Ego Except My Own",
                "ids": {
                    "trakt": 2481539,
                    "tvdb": 5944109,
                    "imdb": null,
                    "tmdb": 1265468,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The Celebrity Apprentice",
                "year": 2004,
                "ids": {
                    "trakt": 3509,
                    "slug": "the-celebrity-apprentice",
                    "tvdb": 72829,
                    "imdb": "tt0364782",
                    "tmdb": 3531,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T01:00:00.000Z",
            "episode": {
                "season": 21,
                "number": 6,
                "title": "Indianapolis Hour 3",
                "ids": {
                    "trakt": 2482487,
                    "tvdb": 5946207,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Antiques Roadshow (US)",
                "year": 1997,
                "ids": {
                    "trakt": 33593,
                    "slug": "antiques-roadshow-us",
                    "tvdb": 75117,
                    "imdb": "tt0159847",
                    "tmdb": 33739,
                    "tvrage": 17788
                }
            }
        }, {
            "first_aired": "2017-02-14T01:00:00.000Z",
            "episode": {
                "season": 7,
                "number": 14,
                "title": "The Sit-Down",
                "ids": {
                    "trakt": 2482944,
                    "tvdb": 5946979,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Love & Hip Hop",
                "year": 2011,
                "ids": {
                    "trakt": 38200,
                    "slug": "love-hip-hop",
                    "tvdb": 238261,
                    "imdb": "tt1718437",
                    "tmdb": 38360,
                    "tvrage": 27607
                }
            }
        }, {
            "first_aired": "2017-02-14T01:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 17,
                "title": "Unholy War",
                "ids": {
                    "trakt": 2490668,
                    "tvdb": 5959964,
                    "imdb": "tt6385266",
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Kevin Can Wait",
                "year": 2016,
                "ids": {
                    "trakt": 107820,
                    "slug": "kevin-can-wait-2016",
                    "tvdb": 311944,
                    "imdb": "tt5462720",
                    "tmdb": 67132,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T01:00:00.000Z",
            "episode": {
                "season": 16,
                "number": 3,
                "title": "The 2017 Grammy Awards",
                "ids": {
                    "trakt": 2494951,
                    "tvdb": 5966710,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Fashion Police",
                "year": 2010,
                "ids": {
                    "trakt": 8737,
                    "slug": "fashion-police",
                    "tvdb": 241851,
                    "imdb": "tt0799870",
                    "tmdb": 8783,
                    "tvrage": 20481
                }
            }
        }, {
            "first_aired": "2017-02-14T01:30:00.000Z",
            "episode": {
                "season": 1,
                "number": 13,
                "title": "Valentine's Day",
                "ids": {
                    "trakt": 2285325,
                    "tvdb": 5923135,
                    "imdb": "tt6280350",
                    "tmdb": 0,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Man With A Plan",
                "year": 2016,
                "ids": {
                    "trakt": 107819,
                    "slug": "man-with-a-plan-2016",
                    "tvdb": 311946,
                    "imdb": "tt5536400",
                    "tmdb": 67156,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T02:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 2,
                "title": "Personal Matters",
                "ids": {
                    "trakt": 2268170,
                    "tvdb": 5656500,
                    "imdb": "tt5826180",
                    "tmdb": 1265158,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "APB",
                "year": 2017,
                "ids": {
                    "trakt": 107746,
                    "slug": "apb",
                    "tvdb": 311819,
                    "imdb": "tt5542294",
                    "tmdb": 67129,
                    "tvrage": 51372
                }
            }
        }, {
            "first_aired": "2017-02-14T02:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 8,
                "title": "Last Action Hero",
                "ids": {
                    "trakt": 2365420,
                    "tvdb": 5782734,
                    "imdb": "tt5791786",
                    "tmdb": 1251237,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Beyond",
                "year": 2017,
                "ids": {
                    "trakt": 112158,
                    "slug": "beyond-2017",
                    "tvdb": 318106,
                    "imdb": "tt5174766",
                    "tmdb": 67726,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T02:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 3,
                "title": "Crime Time",
                "ids": {
                    "trakt": 2467271,
                    "tvdb": 5923144,
                    "imdb": "tt6394170",
                    "tmdb": 1263559,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Superior Donuts",
                "year": 2017,
                "ids": {
                    "trakt": 113914,
                    "slug": "superior-donuts",
                    "tvdb": 321219,
                    "imdb": "tt5462364",
                    "tmdb": 69632,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T02:00:00.000Z",
            "episode": {
                "season": 3,
                "number": 11,
                "title": "Chapter Fifty-Five",
                "ids": {
                    "trakt": 2482285,
                    "tvdb": 5946994,
                    "imdb": null,
                    "tmdb": 1262865,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Jane the Virgin",
                "year": 2014,
                "ids": {
                    "trakt": 60896,
                    "slug": "jane-the-virgin",
                    "tvdb": 281621,
                    "imdb": "tt3566726",
                    "tmdb": 61418,
                    "tvrage": 36552
                }
            }
        }, {
            "first_aired": "2017-02-14T02:00:00.000Z",
            "episode": {
                "season": 3,
                "number": 4,
                "title": "Seeds of Doubt",
                "ids": {
                    "trakt": 2486762,
                    "tvdb": 5953216,
                    "imdb": null,
                    "tmdb": 1268875,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Vanity Fair Confidential",
                "year": 2015,
                "ids": {
                    "trakt": 95377,
                    "slug": "vanity-fair-confidential",
                    "tvdb": 291337,
                    "imdb": "tt4338988",
                    "tmdb": 69861,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T02:00:00.000Z",
            "episode": {
                "season": 5,
                "number": 15,
                "title": "Beads, Beers and Tears",
                "ids": {
                    "trakt": 2489636,
                    "tvdb": 5958292,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Vanderpump Rules",
                "year": 2013,
                "ids": {
                    "trakt": 69009,
                    "slug": "vanderpump-rules",
                    "tvdb": 265577,
                    "imdb": "tt2343157",
                    "tmdb": 61581,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T02:00:00.000Z",
            "episode": {
                "season": 2017,
                "number": 31,
                "title": "February 13, 2017",
                "ids": {
                    "trakt": 2489832,
                    "tvdb": 5958952,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Rachel Maddow Show",
                "year": 2008,
                "ids": {
                    "trakt": 7921,
                    "slug": "the-rachel-maddow-show",
                    "tvdb": 181561,
                    "imdb": "tt1280627",
                    "tmdb": 7967,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T02:00:00.000Z",
            "episode": {
                "season": 7,
                "number": 20,
                "title": "Fake Out",
                "ids": {
                    "trakt": 2490339,
                    "tvdb": 5959908,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Teen Mom 2",
                "year": 2011,
                "ids": {
                    "trakt": 34846,
                    "slug": "teen-mom-2",
                    "tvdb": 221141,
                    "imdb": "tt1821220",
                    "tmdb": 34996,
                    "tvrage": 27391
                }
            }
        }, {
            "first_aired": "2017-02-14T02:00:00.000Z",
            "episode": {
                "season": 10,
                "number": 5,
                "title": "Buggin' Out",
                "ids": {
                    "trakt": 2491416,
                    "tvdb": 5962284,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Fast N' Loud",
                "year": 2012,
                "ids": {
                    "trakt": 46598,
                    "slug": "fast-n-loud",
                    "tvdb": 259393,
                    "imdb": "tt2346169",
                    "tmdb": 46874,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T02:30:00.000Z",
            "episode": {
                "season": 6,
                "number": 16,
                "title": "And the Tease Time",
                "ids": {
                    "trakt": 2478398,
                    "tvdb": 5939669,
                    "imdb": "tt6099558",
                    "tmdb": 1261708,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "2 Broke Girls",
                "year": 2011,
                "ids": {
                    "trakt": 39174,
                    "slug": "2-broke-girls",
                    "tvdb": 248741,
                    "imdb": "tt1845307",
                    "tmdb": 39340,
                    "tvrage": 28416
                }
            }
        }, {
            "first_aired": "2017-02-14T03:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 15,
                "title": "Public Enemy No. 1",
                "ids": {
                    "trakt": 2398874,
                    "tvdb": 5930338,
                    "imdb": null,
                    "tmdb": 1257917,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Timeless",
                "year": 2016,
                "ids": {
                    "trakt": 107677,
                    "slug": "timeless-2016",
                    "tvdb": 311713,
                    "imdb": "tt5511582",
                    "tmdb": 66786,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T03:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 12,
                "title": "FALLENORACLE",
                "ids": {
                    "trakt": 2407161,
                    "tvdb": 5951378,
                    "imdb": "tt6268964",
                    "tmdb": 1262862,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Quantico",
                "year": 2015,
                "ids": {
                    "trakt": 98885,
                    "slug": "quantico",
                    "tvdb": 295515,
                    "imdb": "tt4428122",
                    "tmdb": 62816,
                    "tvrage": 47481
                }
            }
        }, {
            "first_aired": "2017-02-14T03:00:00.000Z",
            "episode": {
                "season": 3,
                "number": 16,
                "title": "Keep It in Check, Mate",
                "ids": {
                    "trakt": 2407175,
                    "tvdb": 5872004,
                    "imdb": "tt6259666",
                    "tmdb": 1266965,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Scorpion",
                "year": 2014,
                "ids": {
                    "trakt": 60356,
                    "slug": "scorpion",
                    "tvdb": 281630,
                    "imdb": "tt3514324",
                    "tmdb": 60797,
                    "tvrage": 40717
                }
            }
        }, {
            "first_aired": "2017-02-14T03:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 6,
                "title": "Something Fishy",
                "ids": {
                    "trakt": 2411399,
                    "tvdb": 5850293,
                    "imdb": "tt6270832",
                    "tmdb": 1265160,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Martha & Snoop's Potluck Dinner Party",
                "year": 2016,
                "ids": {
                    "trakt": 112733,
                    "slug": "martha-snoop-s-potluck-dinner-party",
                    "tvdb": 318972,
                    "imdb": "tt6264286",
                    "tmdb": 68597,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T03:00:00.000Z",
            "episode": {
                "season": 18,
                "number": 8,
                "title": "Accidental Courtesy",
                "ids": {
                    "trakt": 2441614,
                    "tvdb": 5888850,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Independent Lens",
                "year": 1999,
                "ids": {
                    "trakt": 14911,
                    "slug": "independent-lens",
                    "tvdb": 84082,
                    "imdb": "tt0486531",
                    "tmdb": 14976,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T03:00:00.000Z",
            "episode": {
                "season": 124,
                "number": 7,
                "title": "Back to Kansas City Suburbs",
                "ids": {
                    "trakt": 2461888,
                    "tvdb": 5917417,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "House Hunters",
                "year": 1999,
                "ids": {
                    "trakt": 6441,
                    "slug": "house-hunters",
                    "tvdb": 73182,
                    "imdb": "tt0369117",
                    "tmdb": 6480,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T03:00:00.000Z",
            "episode": {
                "season": 3,
                "number": 10,
                "title": "Colombia: Wayuu Wahoo and The Golden One",
                "ids": {
                    "trakt": 2482041,
                    "tvdb": 5933050,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Booze Traveler",
                "year": 2014,
                "ids": {
                    "trakt": 81836,
                    "slug": "booze-traveler",
                    "tvdb": 288463,
                    "imdb": "tt4067382",
                    "tmdb": 62058,
                    "tvrage": 44616
                }
            }
        }, {
            "first_aired": "2017-02-14T03:00:00.000Z",
            "episode": {
                "season": 123,
                "number": 11,
                "title": "Doctors Seek Million Dollar Home in Oklahoma City",
                "ids": {
                    "trakt": 2486585,
                    "tvdb": 5952838,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "House Hunters",
                "year": 1999,
                "ids": {
                    "trakt": 6441,
                    "slug": "house-hunters",
                    "tvdb": 73182,
                    "imdb": "tt0369117",
                    "tmdb": 6480,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T03:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 7,
                "title": "A Cabin for the Bride",
                "ids": {
                    "trakt": 2489810,
                    "tvdb": 5958889,
                    "imdb": null,
                    "tmdb": 1260372,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Maine Cabin Masters",
                "year": 2017,
                "ids": {
                    "trakt": 115945,
                    "slug": "maine-cabin-masters",
                    "tvdb": 322708,
                    "imdb": null,
                    "tmdb": 69898,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T03:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 7,
                "title": "They Got Game",
                "ids": {
                    "trakt": 2493132,
                    "tvdb": 5964171,
                    "imdb": null,
                    "tmdb": 1268894,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Martha & Snoop's Potluck Dinner Party",
                "year": 2016,
                "ids": {
                    "trakt": 112733,
                    "slug": "martha-snoop-s-potluck-dinner-party",
                    "tvdb": 318972,
                    "imdb": "tt6264286",
                    "tmdb": 68597,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T03:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 5,
                "title": "Motors and Rotors",
                "ids": {
                    "trakt": 2494479,
                    "tvdb": 5966192,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Diesel Brothers",
                "year": 2016,
                "ids": {
                    "trakt": 104247,
                    "slug": "diesel-brothers",
                    "tvdb": 304932,
                    "imdb": "tt5320618",
                    "tmdb": 65623,
                    "tvrage": 51021
                }
            }
        }, {
            "first_aired": "2017-02-14T03:30:00.000Z",
            "episode": {
                "season": 103,
                "number": 10,
                "title": "Swinging Back to Sweden",
                "ids": {
                    "trakt": 2479585,
                    "tvdb": 5941356,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "House Hunters International",
                "year": 2006,
                "ids": {
                    "trakt": 29047,
                    "slug": "house-hunters-international",
                    "tvdb": 183411,
                    "imdb": "tt0795129",
                    "tmdb": 29173,
                    "tvrage": 16886
                }
            }
        }, {
            "first_aired": "2017-02-14T04:00:00.000Z",
            "episode": {
                "season": 22,
                "number": 64,
                "title": "Elaine Welteroth & Phillip Picardi",
                "ids": {
                    "trakt": 2484019,
                    "tvdb": 5948145,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Daily Show",
                "year": 1996,
                "ids": {
                    "trakt": 2211,
                    "slug": "the-daily-show",
                    "tvdb": 71256,
                    "imdb": "tt0115147",
                    "tmdb": 2224,
                    "tvrage": 5714
                }
            }
        }, {
            "first_aired": "2017-02-14T04:30:00.000Z",
            "episode": {
                "season": 26,
                "number": 115,
                "title": "2/13/2017",
                "ids": {
                    "trakt": 2450368,
                    "tvdb": 5901261,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Charlie Rose",
                "year": 1991,
                "ids": {
                    "trakt": 914,
                    "slug": "charlie-rose",
                    "tvdb": 81410,
                    "imdb": "tt0270116",
                    "tmdb": 919,
                    "tvrage": 7929
                }
            }
        }, {
            "first_aired": "2017-02-14T04:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 24,
                "title": "Kyle Kinane, Tom Lennon, Milana Vayntrub",
                "ids": {
                    "trakt": 2489024,
                    "tvdb": 5957595,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "@midnight",
                "year": 2013,
                "ids": {
                    "trakt": 60550,
                    "slug": "midnight",
                    "tvdb": 274099,
                    "imdb": "tt3279494",
                    "tmdb": 61025,
                    "tvrage": 38478
                }
            }
        }, {
            "first_aired": "2017-02-14T04:35:00.000Z",
            "episode": {
                "season": 2,
                "number": 94,
                "title": "Shailene Woodley, Laverne Cox, Rick and Marty Lagina",
                "ids": {
                    "trakt": 2492959,
                    "tvdb": 5963945,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Late Show with Stephen Colbert",
                "year": 2015,
                "ids": {
                    "trakt": 93737,
                    "slug": "the-late-show-with-stephen-colbert",
                    "tvdb": 289574,
                    "imdb": "tt3697842",
                    "tmdb": 63770,
                    "tvrage": 41941
                }
            }
        }, {
            "first_aired": "2017-02-14T04:35:00.000Z",
            "episode": {
                "season": 4,
                "number": 25,
                "title": "Magic Johnson, Luke Wilson, Roy Wood Jr.",
                "ids": {
                    "trakt": 2493362,
                    "tvdb": 5964384,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Tonight Show Starring Jimmy Fallon",
                "year": 2014,
                "ids": {
                    "trakt": 59543,
                    "slug": "the-tonight-show-starring-jimmy-fallon",
                    "tvdb": 270261,
                    "imdb": "tt3444938",
                    "tmdb": 59941,
                    "tvrage": 35853
                }
            }
        }, {
            "first_aired": "2017-02-14T05:35:00.000Z",
            "episode": {
                "season": 2,
                "number": 128,
                "title": "Katherine Heigl, Andrew Rannells, Lisa Hannigan",
                "ids": {
                    "trakt": 2493359,
                    "tvdb": 5964400,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Late Late Show with James Corden",
                "year": 2015,
                "ids": {
                    "trakt": 96473,
                    "slug": "the-late-late-show-with-james-corden",
                    "tvdb": 292421,
                    "imdb": "tt4280606",
                    "tmdb": 62223,
                    "tvrage": 44904
                }
            }
        }, {
            "first_aired": "2017-02-14T05:35:00.000Z",
            "episode": {
                "season": 2017,
                "number": 22,
                "title": "Shailene Woodley, Annaleigh Ashford, Evan McMullin, Brann Dailor",
                "ids": {
                    "trakt": 2493365,
                    "tvdb": 5964396,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Late Night with Seth Meyers",
                "year": 2014,
                "ids": {
                    "trakt": 75199,
                    "slug": "late-night-with-seth-meyers",
                    "tvdb": 270262,
                    "imdb": "tt3513388",
                    "tmdb": 61818,
                    "tvrage": 35852
                }
            }
        }, {
            "first_aired": "2017-02-14T06:30:00.000Z",
            "episode": {
                "season": 16,
                "number": 54,
                "title": "Joanna Garcia Swisher, Temples, Steven Strait",
                "ids": {
                    "trakt": 2493307,
                    "tvdb": 5964406,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Last Call with Carson Daly",
                "year": 2002,
                "ids": {
                    "trakt": 5303,
                    "slug": "last-call-with-carson-daly",
                    "tvdb": 78057,
                    "imdb": "tt0305056",
                    "tmdb": 5330,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T08:01:00.000Z",
            "episode": {
                "season": 4,
                "number": 1,
                "title": "Episode 1",
                "ids": {
                    "trakt": 2489589,
                    "tvdb": 5958271,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Project Mc²",
                "year": 2015,
                "ids": {
                    "trakt": 101071,
                    "slug": "project-mc-2015",
                    "tvdb": 299260,
                    "imdb": "tt4861760",
                    "tmdb": 63454,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T11:00:00.000Z",
            "episode": {
                "season": 0,
                "number": 844,
                "title": "- Good Mythical More",
                "ids": {
                    "trakt": 2494132,
                    "tvdb": 5965549,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Good Mythical Morning",
                "year": 2012,
                "ids": {
                    "trakt": 94860,
                    "slug": "good-mythical-morning",
                    "tvdb": 290686,
                    "imdb": "tt4087032",
                    "tmdb": 65701,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T11:00:00.000Z",
            "episode": {
                "season": 11,
                "number": 22,
                "title": null,
                "ids": {
                    "trakt": 2494135,
                    "tvdb": 5965542,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Good Mythical Morning",
                "year": 2012,
                "ids": {
                    "trakt": 94860,
                    "slug": "good-mythical-morning",
                    "tvdb": 290686,
                    "imdb": "tt4087032",
                    "tmdb": 65701,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T16:00:00.000Z",
            "episode": {
                "season": 45,
                "number": 99,
                "title": "2017-02-14",
                "ids": {
                    "trakt": 2494606,
                    "tvdb": 5966252,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Price Is Right",
                "year": 1972,
                "ids": {
                    "trakt": 2038,
                    "slug": "the-price-is-right",
                    "tvdb": 77072,
                    "imdb": "tt0068120",
                    "tmdb": 2051,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T16:15:00.000Z",
            "episode": {
                "season": 30,
                "number": 287,
                "title": "Ep. #7524",
                "ids": {
                    "trakt": 2495218,
                    "tvdb": 5967174,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Bold and the Beautiful",
                "year": 1987,
                "ids": {
                    "trakt": 6608,
                    "slug": "the-bold-and-the-beautiful",
                    "tvdb": 79838,
                    "imdb": "tt0092325",
                    "tmdb": 6647,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T17:00:00.000Z",
            "episode": {
                "season": 5,
                "number": 8,
                "title": null,
                "ids": {
                    "trakt": 2382697,
                    "tvdb": 5804878,
                    "imdb": null,
                    "tmdb": 1249782,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The Mindy Project",
                "year": 2012,
                "ids": {
                    "trakt": 44609,
                    "slug": "the-mindy-project",
                    "tvdb": 259007,
                    "imdb": "tt2211129",
                    "tmdb": 44857,
                    "tvrage": 31682
                }
            }
        }, {
            "first_aired": "2017-02-14T17:30:00.000Z",
            "episode": {
                "season": 44,
                "number": 116,
                "title": "Episode 11115 - February 14, 2017",
                "ids": {
                    "trakt": 2495221,
                    "tvdb": 5967169,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Young and the Restless",
                "year": 1973,
                "ids": {
                    "trakt": 1049,
                    "slug": "the-young-and-the-restless",
                    "tvdb": 70328,
                    "imdb": "tt0069658",
                    "tmdb": 1054,
                    "tvrage": 6318
                }
            }
        }, {
            "first_aired": "2017-02-14T18:00:00.000Z",
            "episode": {
                "season": 52,
                "number": 103,
                "title": "Tuesday Febuary 14, 2017",
                "ids": {
                    "trakt": 2494522,
                    "tvdb": 5966266,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Days of Our Lives",
                "year": 1965,
                "ids": {
                    "trakt": 876,
                    "slug": "days-of-our-lives",
                    "tvdb": 70366,
                    "imdb": "tt0058796",
                    "tmdb": 881,
                    "tvrage": 3256
                }
            }
        }, {
            "first_aired": "2017-02-14T19:00:00.000Z",
            "episode": {
                "season": 54,
                "number": 216,
                "title": "#13746",
                "ids": {
                    "trakt": 2474278,
                    "tvdb": 5933947,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "General Hospital",
                "year": 1963,
                "ids": {
                    "trakt": 982,
                    "slug": "general-hospital",
                    "tvdb": 75332,
                    "imdb": "tt0056758",
                    "tmdb": 987,
                    "tvrage": 3653
                }
            }
        }, {
            "first_aired": "2017-02-14T20:00:00.000Z",
            "episode": {
                "season": 15,
                "number": 100,
                "title": " The Girl in the Box: Kala Brown's Story of Abduction by a Suspected Serial Killer, Her Dramatic Rescue ",
                "ids": {
                    "trakt": 2494626,
                    "tvdb": 5966248,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dr. Phil",
                "year": 2002,
                "ids": {
                    "trakt": 4628,
                    "slug": "dr-phil",
                    "tvdb": 71424,
                    "imdb": "tt0329824",
                    "tmdb": 4652,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T21:00:00.000Z",
            "episode": {
                "season": 14,
                "number": 103,
                "title": "Nick Viall, Charlie Day, Ed Sheeran",
                "ids": {
                    "trakt": 2489872,
                    "tvdb": 5958993,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Ellen DeGeneres Show",
                "year": 2003,
                "ids": {
                    "trakt": 561,
                    "slug": "the-ellen-degeneres-show",
                    "tvdb": 72194,
                    "imdb": "tt0379623",
                    "tmdb": 562,
                    "tvrage": 5750
                }
            }
        }, {
            "first_aired": "2017-02-14T22:00:00.000Z",
            "episode": {
                "season": 21,
                "number": 134,
                "title": "Child Support Feud!; Don't Prey On My Daughter!",
                "ids": {
                    "trakt": 2493595,
                    "tvdb": 5964708,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Judge Judy",
                "year": 1996,
                "ids": {
                    "trakt": 3917,
                    "slug": "judge-judy",
                    "tvdb": 71221,
                    "imdb": "tt0115227",
                    "tmdb": 3940,
                    "tvrage": 7960
                }
            }
        }, {
            "first_aired": "2017-02-14T22:00:00.000Z",
            "episode": {
                "season": 21,
                "number": 135,
                "title": "Exotic Fish Mass Funeral!; That's No Excuse for Driving Drunk!",
                "ids": {
                    "trakt": 2493596,
                    "tvdb": 5964711,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Judge Judy",
                "year": 1996,
                "ids": {
                    "trakt": 3917,
                    "slug": "judge-judy",
                    "tvdb": 71221,
                    "imdb": "tt0115227",
                    "tmdb": 3940,
                    "tvrage": 7960
                }
            }
        }, {
            "first_aired": "2017-02-14T22:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 32,
                "title": "Episode 32",
                "ids": {
                    "trakt": 2424431,
                    "tvdb": 5867015,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Pardon the Interruption",
                "year": 2001,
                "ids": {
                    "trakt": 1889,
                    "slug": "pardon-the-interruption",
                    "tvdb": 266681,
                    "imdb": "tt0307800",
                    "tmdb": 1902,
                    "tvrage": 4774
                }
            }
        }, {
            "first_aired": "2017-02-14T23:00:00.000Z",
            "episode": {
                "season": 42,
                "number": 32,
                "title": "February 14, 2017",
                "ids": {
                    "trakt": 2461955,
                    "tvdb": 5918429,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "PBS NewsHour",
                "year": 1983,
                "ids": {
                    "trakt": 1644,
                    "slug": "pbs-newshour",
                    "tvdb": 81388,
                    "imdb": "tt0247880",
                    "tmdb": 1655,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T23:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 45,
                "title": "Feb 14 Tue",
                "ids": {
                    "trakt": 2488920,
                    "tvdb": 5956494,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "NBC Nightly News",
                "year": 1970,
                "ids": {
                    "trakt": 823,
                    "slug": "nbc-nightly-news",
                    "tvdb": 139911,
                    "imdb": "tt0231035",
                    "tmdb": 826,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T23:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 45,
                "title": "Feb 14 Tue",
                "ids": {
                    "trakt": 2490337,
                    "tvdb": 5959193,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "CBS Evening News",
                "year": 1962,
                "ids": {
                    "trakt": 635,
                    "slug": "cbs-evening-news",
                    "tvdb": 74468,
                    "imdb": null,
                    "tmdb": 637,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-14T23:30:00.000Z",
            "episode": {
                "season": 34,
                "number": 112,
                "title": "Episode 112",
                "ids": {
                    "trakt": 2492646,
                    "tvdb": 5963342,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Wheel of Fortune",
                "year": 1983,
                "ids": {
                    "trakt": 2760,
                    "slug": "wheel-of-fortune",
                    "tvdb": 76573,
                    "imdb": "tt0072584",
                    "tmdb": 2778,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T00:00:00.000Z",
            "episode": {
                "season": 2017,
                "number": 32,
                "title": "S33 College Championship Quarterfinal Game 2",
                "ids": {
                    "trakt": 2484025,
                    "tvdb": 5948132,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Jeopardy!",
                "year": 1964,
                "ids": {
                    "trakt": 2893,
                    "slug": "jeopardy",
                    "tvdb": 77075,
                    "imdb": "tt0159881",
                    "tmdb": 2912,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T00:30:00.000Z",
            "episode": {
                "season": 1,
                "number": 80,
                "title": "Episode 80",
                "ids": {
                    "trakt": 2451479,
                    "tvdb": 5902559,
                    "imdb": null,
                    "tmdb": 1251122,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Vice News Tonight",
                "year": 2016,
                "ids": {
                    "trakt": 111550,
                    "slug": "vice-news-tonight",
                    "tvdb": 317479,
                    "imdb": "tt6329790",
                    "tmdb": 67584,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T00:30:00.000Z",
            "episode": {
                "season": 2,
                "number": 33,
                "title": "The Bounce Lounge",
                "ids": {
                    "trakt": 2480885,
                    "tvdb": 5942779,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Star vs. the Forces of Evil",
                "year": 2015,
                "ids": {
                    "trakt": 80083,
                    "slug": "star-vs-the-forces-of-evil",
                    "tvdb": 282994,
                    "imdb": "tt2758770",
                    "tmdb": 61923,
                    "tvrage": 47307
                }
            }
        }, {
            "first_aired": "2017-02-15T00:30:00.000Z",
            "episode": {
                "season": 5,
                "number": 15,
                "title": "The Matchmaker",
                "ids": {
                    "trakt": 2488566,
                    "tvdb": 5956598,
                    "imdb": null,
                    "tmdb": 1267673,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The Amazing World of Gumball",
                "year": 2011,
                "ids": {
                    "trakt": 37448,
                    "slug": "the-amazing-world-of-gumball",
                    "tvdb": 248482,
                    "imdb": "tt1942683",
                    "tmdb": 37606,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T01:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 13,
                "title": "Cruel and Unusual",
                "ids": {
                    "trakt": 2271510,
                    "tvdb": 5781818,
                    "imdb": "tt5606072",
                    "tmdb": 1258295,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The Fosters",
                "year": 2013,
                "ids": {
                    "trakt": 46604,
                    "slug": "the-fosters-2013",
                    "tvdb": 267907,
                    "imdb": "tt2262532",
                    "tmdb": 46880,
                    "tvrage": 33919
                }
            }
        }, {
            "first_aired": "2017-02-15T01:00:00.000Z",
            "episode": {
                "season": 14,
                "number": 15,
                "title": "Pandora's Box (1)",
                "ids": {
                    "trakt": 2471203,
                    "tvdb": 5929536,
                    "imdb": "tt6365118",
                    "tmdb": 1259623,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "NCIS",
                "year": 2003,
                "ids": {
                    "trakt": 4590,
                    "slug": "ncis",
                    "tvdb": 72108,
                    "imdb": "tt0364845",
                    "tmdb": 4614,
                    "tvrage": 4628
                }
            }
        }, {
            "first_aired": "2017-02-15T01:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 9,
                "title": "Darnell and Dion",
                "ids": {
                    "trakt": 2473915,
                    "tvdb": 5933977,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Wall",
                "year": 2016,
                "ids": {
                    "trakt": 113302,
                    "slug": "the-wall-2016",
                    "tvdb": 320066,
                    "imdb": "tt6304194",
                    "tmdb": 69153,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T01:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 16,
                "title": "Operation: Bobcat",
                "ids": {
                    "trakt": 2479012,
                    "tvdb": 5940072,
                    "imdb": "tt6334588",
                    "tmdb": 1260514,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "New Girl",
                "year": 2011,
                "ids": {
                    "trakt": 1411,
                    "slug": "new-girl",
                    "tvdb": 248682,
                    "imdb": "tt1826940",
                    "tmdb": 1420,
                    "tvrage": 28304
                }
            }
        }, {
            "first_aired": "2017-02-15T01:00:00.000Z",
            "episode": {
                "season": 17,
                "number": 1,
                "title": "Coastal Clash",
                "ids": {
                    "trakt": 2482999,
                    "tvdb": 5946992,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Bad Girls Club",
                "year": 2006,
                "ids": {
                    "trakt": 4914,
                    "slug": "bad-girls-club",
                    "tvdb": 134161,
                    "imdb": "tt0914829",
                    "tmdb": 4940,
                    "tvrage": 14714
                }
            }
        }, {
            "first_aired": "2017-02-15T01:00:00.000Z",
            "episode": {
                "season": 8,
                "number": 14,
                "title": "Sorry Not Sorry",
                "ids": {
                    "trakt": 2486378,
                    "tvdb": 5952379,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Middle",
                "year": 2009,
                "ids": {
                    "trakt": 1413,
                    "slug": "the-middle",
                    "tvdb": 95021,
                    "imdb": "tt1442464",
                    "tmdb": 1422,
                    "tvrage": 20678
                }
            }
        }, {
            "first_aired": "2017-02-15T01:30:00.000Z",
            "episode": {
                "season": 1,
                "number": 14,
                "title": "Time For Love",
                "ids": {
                    "trakt": 2397445,
                    "tvdb": 5952090,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "American Housewife",
                "year": 2016,
                "ids": {
                    "trakt": 43022,
                    "slug": "american-housewife",
                    "tvdb": 253478,
                    "imdb": "tt5396394",
                    "tmdb": 67117,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T01:30:00.000Z",
            "episode": {
                "season": 1,
                "number": 9,
                "title": "The Mess",
                "ids": {
                    "trakt": 2440536,
                    "tvdb": 5887076,
                    "imdb": "tt6496902",
                    "tmdb": 1266931,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The Mick",
                "year": 2017,
                "ids": {
                    "trakt": 107777,
                    "slug": "the-mick-2017",
                    "tvdb": 311818,
                    "imdb": "tt5638056",
                    "tmdb": 66551,
                    "tvrage": 51049
                }
            }
        }, {
            "first_aired": "2017-02-15T02:00:00.000Z",
            "episode": {
                "season": 5,
                "number": 3,
                "title": "Surprise",
                "ids": {
                    "trakt": 2136237,
                    "tvdb": 5494319,
                    "imdb": null,
                    "tmdb": 1249769,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Switched at Birth",
                "year": 2011,
                "ids": {
                    "trakt": 37474,
                    "slug": "switched-at-birth",
                    "tvdb": 247773,
                    "imdb": "tt1758772",
                    "tmdb": 37632,
                    "tvrage": 27701
                }
            }
        }, {
            "first_aired": "2017-02-15T02:00:00.000Z",
            "episode": {
                "season": 12,
                "number": 7,
                "title": "The Scare in the Score",
                "ids": {
                    "trakt": 2224924,
                    "tvdb": 5818519,
                    "imdb": null,
                    "tmdb": 1260520,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Bones",
                "year": 2005,
                "ids": {
                    "trakt": 1898,
                    "slug": "bones",
                    "tvdb": 75682,
                    "imdb": "tt0460627",
                    "tmdb": 1911,
                    "tvrage": 2870
                }
            }
        }, {
            "first_aired": "2017-02-15T02:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 14,
                "title": "It's Classified",
                "ids": {
                    "trakt": 2406174,
                    "tvdb": 5946628,
                    "imdb": "tt6418306",
                    "tmdb": 1262231,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Bull",
                "year": 2016,
                "ids": {
                    "trakt": 107876,
                    "slug": "bull-2016",
                    "tvdb": 311945,
                    "imdb": "tt5827228",
                    "tmdb": 66840,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T02:00:00.000Z",
            "episode": {
                "season": 29,
                "number": 7,
                "title": "Ruby Ridge",
                "ids": {
                    "trakt": 2421969,
                    "tvdb": 5864859,
                    "imdb": null,
                    "tmdb": 1254333,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "American Experience",
                "year": 1988,
                "ids": {
                    "trakt": 1176,
                    "slug": "american-experience",
                    "tvdb": 71638,
                    "imdb": "tt0094416",
                    "tmdb": 1181,
                    "tvrage": 18193
                }
            }
        }, {
            "first_aired": "2017-02-15T02:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 1,
                "title": "Sex Fairy and the Eternal Flames",
                "ids": {
                    "trakt": 2441921,
                    "tvdb": 5889153,
                    "imdb": null,
                    "tmdb": 1267308,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "You Me Her",
                "year": 2016,
                "ids": {
                    "trakt": 106499,
                    "slug": "you-me-her",
                    "tvdb": 309130,
                    "imdb": "tt5179408",
                    "tmdb": 66008,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T02:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 15,
                "title": "Jack Pearson's Son",
                "ids": {
                    "trakt": 2451972,
                    "tvdb": 5903129,
                    "imdb": "tt6142664",
                    "tmdb": 1260451,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "This Is Us",
                "year": 2016,
                "ids": {
                    "trakt": 107690,
                    "slug": "this-is-us",
                    "tvdb": 311714,
                    "imdb": "tt5555260",
                    "tmdb": 67136,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T02:00:00.000Z",
            "episode": {
                "season": 3,
                "number": 13,
                "title": "Neighbors With Attitude",
                "ids": {
                    "trakt": 2452055,
                    "tvdb": 5903200,
                    "imdb": null,
                    "tmdb": 1266031,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Fresh Off the Boat",
                "year": 2015,
                "ids": {
                    "trakt": 77805,
                    "slug": "fresh-off-the-boat-2015",
                    "tvdb": 281618,
                    "imdb": "tt3551096",
                    "tmdb": 61692,
                    "tvrage": 40487
                }
            }
        }, {
            "first_aired": "2017-02-15T02:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 7,
                "title": "Pieces of the Puzzle ",
                "ids": {
                    "trakt": 2482993,
                    "tvdb": 5946925,
                    "imdb": null,
                    "tmdb": 1211243,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Tyler Perry's The Haves and the Have Nots",
                "year": 2013,
                "ids": {
                    "trakt": 46178,
                    "slug": "tyler-perry-s-the-haves-and-the-have-nots",
                    "tvdb": 267910,
                    "imdb": "tt2729716",
                    "tmdb": 46441,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T02:00:00.000Z",
            "episode": {
                "season": 7,
                "number": 11,
                "title": "Backed Into a Corner",
                "ids": {
                    "trakt": 2486767,
                    "tvdb": 5953160,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Real Housewives of Beverly Hills",
                "year": 2010,
                "ids": {
                    "trakt": 32250,
                    "slug": "the-real-housewives-of-beverly-hills",
                    "tvdb": 196741,
                    "imdb": "tt1720601",
                    "tmdb": 32390,
                    "tvrage": 25448
                }
            }
        }, {
            "first_aired": "2017-02-15T02:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 14,
                "title": "Of Sticks and Stones",
                "ids": {
                    "trakt": 2487435,
                    "tvdb": 5953486,
                    "imdb": null,
                    "tmdb": 1265954,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The Curse of Oak Island",
                "year": 2014,
                "ids": {
                    "trakt": 60184,
                    "slug": "the-curse-of-oak-island",
                    "tvdb": 276515,
                    "imdb": "tt3455408",
                    "tmdb": 60603,
                    "tvrage": 39528
                }
            }
        }, {
            "first_aired": "2017-02-15T02:00:00.000Z",
            "episode": {
                "season": 11,
                "number": 4,
                "title": "Snow Queens",
                "ids": {
                    "trakt": 2488850,
                    "tvdb": 5957144,
                    "imdb": null,
                    "tmdb": 1266009,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Face Off",
                "year": 2011,
                "ids": {
                    "trakt": 35218,
                    "slug": "face-off",
                    "tvdb": 214831,
                    "imdb": "tt1663641",
                    "tmdb": 35370,
                    "tvrage": 27213
                }
            }
        }, {
            "first_aired": "2017-02-15T02:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 10,
                "title": "Sweet Surprise at the Silos",
                "ids": {
                    "trakt": 2488859,
                    "tvdb": 5960668,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Fixer Upper",
                "year": 2014,
                "ids": {
                    "trakt": 60459,
                    "slug": "fixer-upper",
                    "tvdb": 281053,
                    "imdb": "tt4591390",
                    "tmdb": 60911,
                    "tvrage": 36040
                }
            }
        }, {
            "first_aired": "2017-02-15T02:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 4,
                "title": "How We Hunt",
                "ids": {
                    "trakt": 2489742,
                    "tvdb": 5958295,
                    "imdb": null,
                    "tmdb": 1266043,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Outsiders",
                "year": 2016,
                "ids": {
                    "trakt": 103451,
                    "slug": "outsiders-2016",
                    "tvdb": 303236,
                    "imdb": "tt4816626",
                    "tmdb": 64437,
                    "tvrage": 48962
                }
            }
        }, {
            "first_aired": "2017-02-15T02:00:00.000Z",
            "episode": {
                "season": 2017,
                "number": 32,
                "title": "February 14, 2017",
                "ids": {
                    "trakt": 2489834,
                    "tvdb": 5958953,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Rachel Maddow Show",
                "year": 2008,
                "ids": {
                    "trakt": 7921,
                    "slug": "the-rachel-maddow-show",
                    "tvdb": 181561,
                    "imdb": "tt1280627",
                    "tmdb": 7967,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T02:00:00.000Z",
            "episode": {
                "season": 7,
                "number": 12,
                "title": "It's Not Always Sunny in Pittsburgh",
                "ids": {
                    "trakt": 2490511,
                    "tvdb": 5960755,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dance Moms",
                "year": 2011,
                "ids": {
                    "trakt": 39843,
                    "slug": "dance-moms",
                    "tvdb": 250379,
                    "imdb": "tt1991410",
                    "tmdb": 40026,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T02:00:00.000Z",
            "episode": {
                "season": 3,
                "number": 13,
                "title": "Strange Symbols in the Desert",
                "ids": {
                    "trakt": 2493640,
                    "tvdb": 5964678,
                    "imdb": null,
                    "tmdb": 1267507,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "What on Earth?",
                "year": 2015,
                "ids": {
                    "trakt": 96593,
                    "slug": "what-on-earth-2015",
                    "tvdb": 292603,
                    "imdb": "tt4543056",
                    "tmdb": 70189,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T02:30:00.000Z",
            "episode": {
                "season": 2,
                "number": 12,
                "title": "The Real Brother’s Keeper",
                "ids": {
                    "trakt": 2486768,
                    "tvdb": 5953132,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Real O'Neals",
                "year": 2016,
                "ids": {
                    "trakt": 98889,
                    "slug": "the-real-o-neals",
                    "tvdb": 295519,
                    "imdb": "tt4422756",
                    "tmdb": 62856,
                    "tvrage": 49008
                }
            }
        }, {
            "first_aired": "2017-02-15T03:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 6,
                "title": "Lagos with WizKid, Ice Prince",
                "ids": {
                    "trakt": 2196853,
                    "tvdb": 5943156,
                    "imdb": null,
                    "tmdb": 1260637,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Noisey",
                "year": 2016,
                "ids": {
                    "trakt": 105759,
                    "slug": "noisey",
                    "tvdb": 255775,
                    "imdb": "tt5730720",
                    "tmdb": 69211,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T03:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 14,
                "title": "The Man Behind the Shield",
                "ids": {
                    "trakt": 2313361,
                    "tvdb": 5905304,
                    "imdb": "tt5916818",
                    "tmdb": 1252731,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Marvel's Agents of S.H.I.E.L.D.",
                "year": 2013,
                "ids": {
                    "trakt": 1394,
                    "slug": "marvel-s-agents-of-s-h-i-e-l-d",
                    "tvdb": 263365,
                    "imdb": "tt2364582",
                    "tmdb": 1403,
                    "tvrage": 32656
                }
            }
        }, {
            "first_aired": "2017-02-15T03:00:00.000Z",
            "episode": {
                "season": 18,
                "number": 9,
                "title": "Tower",
                "ids": {
                    "trakt": 2441616,
                    "tvdb": 5888851,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Independent Lens",
                "year": 1999,
                "ids": {
                    "trakt": 14911,
                    "slug": "independent-lens",
                    "tvdb": 84082,
                    "imdb": "tt0486531",
                    "tmdb": 14976,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T03:00:00.000Z",
            "episode": {
                "season": 32,
                "number": 7,
                "title": "Blue Plate Fate",
                "ids": {
                    "trakt": 2466877,
                    "tvdb": 5922036,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Chopped",
                "year": 2009,
                "ids": {
                    "trakt": 17326,
                    "slug": "chopped",
                    "tvdb": 85019,
                    "imdb": "tt1353281",
                    "tmdb": 17404,
                    "tvrage": 20628
                }
            }
        }, {
            "first_aired": "2017-02-15T03:00:00.000Z",
            "episode": {
                "season": 3,
                "number": 14,
                "title": "Pandora's Box (2)",
                "ids": {
                    "trakt": 2475243,
                    "tvdb": 5936537,
                    "imdb": "tt6411946",
                    "tmdb": 1259624,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "NCIS: New Orleans",
                "year": 2014,
                "ids": {
                    "trakt": 60865,
                    "slug": "ncis-new-orleans",
                    "tvdb": 278125,
                    "imdb": "tt3560084",
                    "tmdb": 61387,
                    "tvrage": 38017
                }
            }
        }, {
            "first_aired": "2017-02-15T03:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 5,
                "title": "Getting Served",
                "ids": {
                    "trakt": 2478503,
                    "tvdb": 5939424,
                    "imdb": "tt5327076",
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Being Mary Jane",
                "year": 2013,
                "ids": {
                    "trakt": 54168,
                    "slug": "being-mary-jane",
                    "tvdb": 268872,
                    "imdb": "tt2345481",
                    "tmdb": 54511,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T03:00:00.000Z",
            "episode": {
                "season": 5,
                "number": 13,
                "title": "Trading in Scuttlebutt",
                "ids": {
                    "trakt": 2479049,
                    "tvdb": 5940102,
                    "imdb": "tt6464100",
                    "tmdb": 1260477,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Chicago Fire",
                "year": 2012,
                "ids": {
                    "trakt": 43764,
                    "slug": "chicago-fire",
                    "tvdb": 258541,
                    "imdb": "tt2261391",
                    "tmdb": 44006,
                    "tvrage": 30748
                }
            }
        }, {
            "first_aired": "2017-02-15T03:00:00.000Z",
            "episode": {
                "season": 3,
                "number": 6,
                "title": "Fill-er Up!",
                "ids": {
                    "trakt": 2481024,
                    "tvdb": 5942772,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Hack My Life",
                "year": 2015,
                "ids": {
                    "trakt": 94502,
                    "slug": "hack-my-life-2015",
                    "tvdb": 290300,
                    "imdb": "tt4362342",
                    "tmdb": 62906,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T03:00:00.000Z",
            "episode": {
                "season": 3,
                "number": 7,
                "title": "Jump the Line",
                "ids": {
                    "trakt": 2486076,
                    "tvdb": 5951914,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Hack My Life",
                "year": 2015,
                "ids": {
                    "trakt": 94502,
                    "slug": "hack-my-life-2015",
                    "tvdb": 290300,
                    "imdb": "tt4362342",
                    "tmdb": 62906,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T03:00:00.000Z",
            "episode": {
                "season": 29,
                "number": 3,
                "title": "Helter Shelter",
                "ids": {
                    "trakt": 2488090,
                    "tvdb": 5955313,
                    "imdb": null,
                    "tmdb": 1264000,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The Challenge",
                "year": 1998,
                "ids": {
                    "trakt": 61,
                    "slug": "the-challenge",
                    "tvdb": 70870,
                    "imdb": "tt0176095",
                    "tmdb": 62,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T03:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 2,
                "title": "My Balls, Dickhead",
                "ids": {
                    "trakt": 2489120,
                    "tvdb": 5956546,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Imposters",
                "year": 2017,
                "ids": {
                    "trakt": 113543,
                    "slug": "imposters",
                    "tvdb": 320520,
                    "imdb": "tt5212822",
                    "tmdb": 69889,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T03:00:00.000Z",
            "episode": {
                "season": 9,
                "number": 2,
                "title": "TBA",
                "ids": {
                    "trakt": 2489719,
                    "tvdb": 5958502,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Tosh.0",
                "year": 2009,
                "ids": {
                    "trakt": 17933,
                    "slug": "tosh-0",
                    "tvdb": 97731,
                    "imdb": "tt1430587",
                    "tmdb": 18014,
                    "tvrage": 22690
                }
            }
        }, {
            "first_aired": "2017-02-15T04:00:00.000Z",
            "episode": {
                "season": 22,
                "number": 65,
                "title": "Laverne Cox",
                "ids": {
                    "trakt": 2484020,
                    "tvdb": 5948146,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Daily Show",
                "year": 1996,
                "ids": {
                    "trakt": 2211,
                    "slug": "the-daily-show",
                    "tvdb": 71256,
                    "imdb": "tt0115147",
                    "tmdb": 2224,
                    "tvrage": 5714
                }
            }
        }, {
            "first_aired": "2017-02-15T04:30:00.000Z",
            "episode": {
                "season": 26,
                "number": 116,
                "title": "2/14/2017",
                "ids": {
                    "trakt": 2450370,
                    "tvdb": 5901263,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Charlie Rose",
                "year": 1991,
                "ids": {
                    "trakt": 914,
                    "slug": "charlie-rose",
                    "tvdb": 81410,
                    "imdb": "tt0270116",
                    "tmdb": 919,
                    "tvrage": 7929
                }
            }
        }, {
            "first_aired": "2017-02-15T04:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 25,
                "title": "Mary Lynn Rajskub, Al Jackson, \"Weird Al\" Yankovic",
                "ids": {
                    "trakt": 2489025,
                    "tvdb": 5957596,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "@midnight",
                "year": 2013,
                "ids": {
                    "trakt": 60550,
                    "slug": "midnight",
                    "tvdb": 274099,
                    "imdb": "tt3279494",
                    "tmdb": 61025,
                    "tvrage": 38478
                }
            }
        }, {
            "first_aired": "2017-02-15T04:35:00.000Z",
            "episode": {
                "season": 2,
                "number": 95,
                "title": "Christine Baranski, Hans Zimmer",
                "ids": {
                    "trakt": 2492960,
                    "tvdb": 5963946,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Late Show with Stephen Colbert",
                "year": 2015,
                "ids": {
                    "trakt": 93737,
                    "slug": "the-late-show-with-stephen-colbert",
                    "tvdb": 289574,
                    "imdb": "tt3697842",
                    "tmdb": 63770,
                    "tvrage": 41941
                }
            }
        }, {
            "first_aired": "2017-02-15T04:35:00.000Z",
            "episode": {
                "season": 4,
                "number": 26,
                "title": "Charlie Day, Kendall Jenner, NxWorries",
                "ids": {
                    "trakt": 2493363,
                    "tvdb": 5964386,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Tonight Show Starring Jimmy Fallon",
                "year": 2014,
                "ids": {
                    "trakt": 59543,
                    "slug": "the-tonight-show-starring-jimmy-fallon",
                    "tvdb": 270261,
                    "imdb": "tt3444938",
                    "tmdb": 59941,
                    "tvrage": 35853
                }
            }
        }, {
            "first_aired": "2017-02-15T05:35:00.000Z",
            "episode": {
                "season": 2,
                "number": 129,
                "title": "Laura Dern, Lena Dunham, Zach Galifianakis",
                "ids": {
                    "trakt": 2493360,
                    "tvdb": 5964402,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Late Late Show with James Corden",
                "year": 2015,
                "ids": {
                    "trakt": 96473,
                    "slug": "the-late-late-show-with-james-corden",
                    "tvdb": 292421,
                    "imdb": "tt4280606",
                    "tmdb": 62223,
                    "tvrage": 44904
                }
            }
        }, {
            "first_aired": "2017-02-15T05:35:00.000Z",
            "episode": {
                "season": 2017,
                "number": 23,
                "title": "Damian Lewis, Adam Scott, Charlotte OC, Brann Dailor",
                "ids": {
                    "trakt": 2493366,
                    "tvdb": 5964397,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Late Night with Seth Meyers",
                "year": 2014,
                "ids": {
                    "trakt": 75199,
                    "slug": "late-night-with-seth-meyers",
                    "tvdb": 270262,
                    "imdb": "tt3513388",
                    "tmdb": 61818,
                    "tvrage": 35852
                }
            }
        }, {
            "first_aired": "2017-02-15T06:30:00.000Z",
            "episode": {
                "season": 16,
                "number": 55,
                "title": "Bill Paxton, Bear Hands, Preacher Lawson",
                "ids": {
                    "trakt": 2493308,
                    "tvdb": 5964407,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Last Call with Carson Daly",
                "year": 2002,
                "ids": {
                    "trakt": 5303,
                    "slug": "last-call-with-carson-daly",
                    "tvdb": 78057,
                    "imdb": "tt0305056",
                    "tmdb": 5330,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T11:00:00.000Z",
            "episode": {
                "season": 0,
                "number": 845,
                "title": "- Good Mythical More",
                "ids": {
                    "trakt": 2494133,
                    "tvdb": 5965550,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Good Mythical Morning",
                "year": 2012,
                "ids": {
                    "trakt": 94860,
                    "slug": "good-mythical-morning",
                    "tvdb": 290686,
                    "imdb": "tt4087032",
                    "tmdb": 65701,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T11:00:00.000Z",
            "episode": {
                "season": 11,
                "number": 23,
                "title": null,
                "ids": {
                    "trakt": 2494136,
                    "tvdb": 5965543,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Good Mythical Morning",
                "year": 2012,
                "ids": {
                    "trakt": 94860,
                    "slug": "good-mythical-morning",
                    "tvdb": 290686,
                    "imdb": "tt4087032",
                    "tmdb": 65701,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T16:00:00.000Z",
            "episode": {
                "season": 45,
                "number": 100,
                "title": "2017-02-15",
                "ids": {
                    "trakt": 2494607,
                    "tvdb": 5966253,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Price Is Right",
                "year": 1972,
                "ids": {
                    "trakt": 2038,
                    "slug": "the-price-is-right",
                    "tvdb": 77072,
                    "imdb": "tt0068120",
                    "tmdb": 2051,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T16:15:00.000Z",
            "episode": {
                "season": 30,
                "number": 288,
                "title": "Ep. #7525",
                "ids": {
                    "trakt": 2495219,
                    "tvdb": 5967176,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Bold and the Beautiful",
                "year": 1987,
                "ids": {
                    "trakt": 6608,
                    "slug": "the-bold-and-the-beautiful",
                    "tvdb": 79838,
                    "imdb": "tt0092325",
                    "tmdb": 6647,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T17:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 5,
                "title": null,
                "ids": {
                    "trakt": 2486309,
                    "tvdb": 5953068,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Path",
                "year": 2016,
                "ids": {
                    "trakt": 103936,
                    "slug": "the-path",
                    "tvdb": 304196,
                    "imdb": "tt4789576",
                    "tmdb": 65227,
                    "tvrage": 51338
                }
            }
        }, {
            "first_aired": "2017-02-15T17:30:00.000Z",
            "episode": {
                "season": 44,
                "number": 117,
                "title": "Episode 11116 - February 15, 2017",
                "ids": {
                    "trakt": 2495228,
                    "tvdb": 5967170,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Young and the Restless",
                "year": 1973,
                "ids": {
                    "trakt": 1049,
                    "slug": "the-young-and-the-restless",
                    "tvdb": 70328,
                    "imdb": "tt0069658",
                    "tmdb": 1054,
                    "tvrage": 6318
                }
            }
        }, {
            "first_aired": "2017-02-15T18:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 10,
                "title": "TBA",
                "ids": {
                    "trakt": 2487072,
                    "tvdb": 5953323,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "TableTop",
                "year": 2012,
                "ids": {
                    "trakt": 66380,
                    "slug": "tabletop",
                    "tvdb": 257942,
                    "imdb": "tt2374117",
                    "tmdb": 61749,
                    "tvrage": 34405
                }
            }
        }, {
            "first_aired": "2017-02-15T18:00:00.000Z",
            "episode": {
                "season": 52,
                "number": 104,
                "title": "Wednesday Febuary 15, 2017",
                "ids": {
                    "trakt": 2494528,
                    "tvdb": 5966267,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Days of Our Lives",
                "year": 1965,
                "ids": {
                    "trakt": 876,
                    "slug": "days-of-our-lives",
                    "tvdb": 70366,
                    "imdb": "tt0058796",
                    "tmdb": 881,
                    "tvrage": 3256
                }
            }
        }, {
            "first_aired": "2017-02-15T19:00:00.000Z",
            "episode": {
                "season": 54,
                "number": 217,
                "title": "#13747",
                "ids": {
                    "trakt": 2474279,
                    "tvdb": 5933948,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "General Hospital",
                "year": 1963,
                "ids": {
                    "trakt": 982,
                    "slug": "general-hospital",
                    "tvdb": 75332,
                    "imdb": "tt0056758",
                    "tmdb": 987,
                    "tvrage": 3653
                }
            }
        }, {
            "first_aired": "2017-02-15T20:00:00.000Z",
            "episode": {
                "season": 15,
                "number": 101,
                "title": " Bad Boy Blake With Abs of Steel: Can Dr. Phil Break Through His Cold Heart? ",
                "ids": {
                    "trakt": 2494627,
                    "tvdb": 5966249,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dr. Phil",
                "year": 2002,
                "ids": {
                    "trakt": 4628,
                    "slug": "dr-phil",
                    "tvdb": 71424,
                    "imdb": "tt0329824",
                    "tmdb": 4652,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T21:00:00.000Z",
            "episode": {
                "season": 14,
                "number": 104,
                "title": "Adam Levine",
                "ids": {
                    "trakt": 2489873,
                    "tvdb": 5958994,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Ellen DeGeneres Show",
                "year": 2003,
                "ids": {
                    "trakt": 561,
                    "slug": "the-ellen-degeneres-show",
                    "tvdb": 72194,
                    "imdb": "tt0379623",
                    "tmdb": 562,
                    "tvrage": 5750
                }
            }
        }, {
            "first_aired": "2017-02-15T22:00:00.000Z",
            "episode": {
                "season": 21,
                "number": 136,
                "title": "Playing House With a Baby!; Bad Tempered Landlord?",
                "ids": {
                    "trakt": 2493597,
                    "tvdb": 5964714,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Judge Judy",
                "year": 1996,
                "ids": {
                    "trakt": 3917,
                    "slug": "judge-judy",
                    "tvdb": 71221,
                    "imdb": "tt0115227",
                    "tmdb": 3940,
                    "tvrage": 7960
                }
            }
        }, {
            "first_aired": "2017-02-15T22:00:00.000Z",
            "episode": {
                "season": 21,
                "number": 137,
                "title": "Muzzle Your Pit Bull!; Rebellious Grandson Rent Control?!; I Should Have Let My Wife Speak!",
                "ids": {
                    "trakt": 2493598,
                    "tvdb": 5964716,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Judge Judy",
                "year": 1996,
                "ids": {
                    "trakt": 3917,
                    "slug": "judge-judy",
                    "tvdb": 71221,
                    "imdb": "tt0115227",
                    "tmdb": 3940,
                    "tvrage": 7960
                }
            }
        }, {
            "first_aired": "2017-02-15T22:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 33,
                "title": "Episode 33",
                "ids": {
                    "trakt": 2424432,
                    "tvdb": 5867016,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Pardon the Interruption",
                "year": 2001,
                "ids": {
                    "trakt": 1889,
                    "slug": "pardon-the-interruption",
                    "tvdb": 266681,
                    "imdb": "tt0307800",
                    "tmdb": 1902,
                    "tvrage": 4774
                }
            }
        }, {
            "first_aired": "2017-02-15T23:00:00.000Z",
            "episode": {
                "season": 42,
                "number": 33,
                "title": "February 15, 2017",
                "ids": {
                    "trakt": 2461956,
                    "tvdb": 5918433,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "PBS NewsHour",
                "year": 1983,
                "ids": {
                    "trakt": 1644,
                    "slug": "pbs-newshour",
                    "tvdb": 81388,
                    "imdb": "tt0247880",
                    "tmdb": 1655,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T23:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 46,
                "title": "Feb 15 Wed",
                "ids": {
                    "trakt": 2488921,
                    "tvdb": 5956495,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "NBC Nightly News",
                "year": 1970,
                "ids": {
                    "trakt": 823,
                    "slug": "nbc-nightly-news",
                    "tvdb": 139911,
                    "imdb": "tt0231035",
                    "tmdb": 826,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T23:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 46,
                "title": "Feb 15 Wed",
                "ids": {
                    "trakt": 2490338,
                    "tvdb": 5959194,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "CBS Evening News",
                "year": 1962,
                "ids": {
                    "trakt": 635,
                    "slug": "cbs-evening-news",
                    "tvdb": 74468,
                    "imdb": null,
                    "tmdb": 637,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-15T23:30:00.000Z",
            "episode": {
                "season": 34,
                "number": 113,
                "title": "Episode 113",
                "ids": {
                    "trakt": 2492647,
                    "tvdb": 5963343,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Wheel of Fortune",
                "year": 1983,
                "ids": {
                    "trakt": 2760,
                    "slug": "wheel-of-fortune",
                    "tvdb": 76573,
                    "imdb": "tt0072584",
                    "tmdb": 2778,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T00:00:00.000Z",
            "episode": {
                "season": 2017,
                "number": 33,
                "title": "S33 College Championship Quarterfinal Game 3",
                "ids": {
                    "trakt": 2484026,
                    "tvdb": 5948134,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Jeopardy!",
                "year": 1964,
                "ids": {
                    "trakt": 2893,
                    "slug": "jeopardy",
                    "tvdb": 77075,
                    "imdb": "tt0159881",
                    "tmdb": 2912,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T00:30:00.000Z",
            "episode": {
                "season": 1,
                "number": 81,
                "title": "Episode 81",
                "ids": {
                    "trakt": 2451480,
                    "tvdb": 5902560,
                    "imdb": null,
                    "tmdb": 1251123,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Vice News Tonight",
                "year": 2016,
                "ids": {
                    "trakt": 111550,
                    "slug": "vice-news-tonight",
                    "tvdb": 317479,
                    "imdb": "tt6329790",
                    "tmdb": 67584,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T00:30:00.000Z",
            "episode": {
                "season": 2,
                "number": 34,
                "title": "Crystal Clear",
                "ids": {
                    "trakt": 2480886,
                    "tvdb": 5942780,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Star vs. the Forces of Evil",
                "year": 2015,
                "ids": {
                    "trakt": 80083,
                    "slug": "star-vs-the-forces-of-evil",
                    "tvdb": 282994,
                    "imdb": "tt2758770",
                    "tmdb": 61923,
                    "tvrage": 47307
                }
            }
        }, {
            "first_aired": "2017-02-16T00:30:00.000Z",
            "episode": {
                "season": 5,
                "number": 16,
                "title": "The Box",
                "ids": {
                    "trakt": 2488567,
                    "tvdb": 5956599,
                    "imdb": null,
                    "tmdb": 1267674,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The Amazing World of Gumball",
                "year": 2011,
                "ids": {
                    "trakt": 37448,
                    "slug": "the-amazing-world-of-gumball",
                    "tvdb": 248482,
                    "imdb": "tt1942683",
                    "tmdb": 37606,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T01:00:00.000Z",
            "episode": {
                "season": 5,
                "number": 13,
                "title": "Spectre of the Gun",
                "ids": {
                    "trakt": 2313925,
                    "tvdb": 5860433,
                    "imdb": "tt5607500",
                    "tmdb": 1263508,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Arrow",
                "year": 2012,
                "ids": {
                    "trakt": 1403,
                    "slug": "arrow",
                    "tvdb": 257655,
                    "imdb": "tt2193021",
                    "tmdb": 1412,
                    "tvrage": 30715
                }
            }
        }, {
            "first_aired": "2017-02-16T01:00:00.000Z",
            "episode": {
                "season": 3,
                "number": 24,
                "title": "Macho Madness",
                "ids": {
                    "trakt": 2339997,
                    "tvdb": 5693445,
                    "imdb": null,
                    "tmdb": 0,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Lucha Underground",
                "year": 2014,
                "ids": {
                    "trakt": 99463,
                    "slug": "lucha-underground-2014",
                    "tvdb": 286272,
                    "imdb": "tt4171176",
                    "tmdb": 61928,
                    "tvrage": 0
                }
            }
        }, {
            "first_aired": "2017-02-16T01:00:00.000Z",
            "episode": {
                "season": 3,
                "number": 10,
                "title": "JAM Session",
                "ids": {
                    "trakt": 2425872,
                    "tvdb": 5868304,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Henry Danger",
                "year": 2014,
                "ids": {
                    "trakt": 79317,
                    "slug": "henry-danger",
                    "tvdb": 284114,
                    "imdb": "tt3596174",
                    "tmdb": 61852,
                    "tvrage": 43498
                }
            }
        }, {
            "first_aired": "2017-02-16T01:00:00.000Z",
            "episode": {
                "season": 10,
                "number": 22,
                "title": "Chloe Rules!",
                "ids": {
                    "trakt": 2435894,
                    "tvdb": 5938717,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Fairly OddParents",
                "year": 2001,
                "ids": {
                    "trakt": 4606,
                    "slug": "the-fairly-oddparents",
                    "tvdb": 76372,
                    "imdb": "tt0235918",
                    "tmdb": 4630,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T01:00:00.000Z",
            "episode": {
                "season": 10,
                "number": 23,
                "title": "Tardy Sauce",
                "ids": {
                    "trakt": 2435895,
                    "tvdb": 5938719,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Fairly OddParents",
                "year": 2001,
                "ids": {
                    "trakt": 4606,
                    "slug": "the-fairly-oddparents",
                    "tvdb": 76372,
                    "imdb": "tt0235918",
                    "tmdb": 4630,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T01:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 14,
                "title": "Borrow or Rob",
                "ids": {
                    "trakt": 2439337,
                    "tvdb": 5937136,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Blindspot",
                "year": 2015,
                "ids": {
                    "trakt": 98980,
                    "slug": "blindspot",
                    "tvdb": 295647,
                    "imdb": "tt4474344",
                    "tmdb": 62710,
                    "tvrage": 44628
                }
            }
        }, {
            "first_aired": "2017-02-16T01:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 15,
                "title": "As Good As It Getz",
                "ids": {
                    "trakt": 2442109,
                    "tvdb": 5942445,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Lethal Weapon",
                "year": 2016,
                "ids": {
                    "trakt": 107717,
                    "slug": "lethal-weapon",
                    "tvdb": 311790,
                    "imdb": "tt5164196",
                    "tmdb": 67116,
                    "tvrage": 51371
                }
            }
        }, {
            "first_aired": "2017-02-16T01:00:00.000Z",
            "episode": {
                "season": 10,
                "number": 7,
                "title": "After 7",
                "ids": {
                    "trakt": 2466631,
                    "tvdb": 5922107,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Unsung",
                "year": 2008,
                "ids": {
                    "trakt": 24552,
                    "slug": "unsung",
                    "tvdb": 250101,
                    "imdb": "tt1334307",
                    "tmdb": 24661,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T01:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 5,
                "title": "A $250,000 Gamble",
                "ids": {
                    "trakt": 2480121,
                    "tvdb": 5859582,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Hunted",
                "year": 2017,
                "ids": {
                    "trakt": 113513,
                    "slug": "hunted-2017",
                    "tvdb": 320455,
                    "imdb": "tt6340730",
                    "tmdb": 69828,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T01:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 14,
                "title": "The Spencer's Gift",
                "ids": {
                    "trakt": 2483893,
                    "tvdb": 5947884,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Goldbergs",
                "year": 2013,
                "ids": {
                    "trakt": 48702,
                    "slug": "the-goldbergs-2013",
                    "tvdb": 269653,
                    "imdb": "tt2712740",
                    "tmdb": 49009,
                    "tvrage": 35814
                }
            }
        }, {
            "first_aired": "2017-02-16T01:00:00.000Z",
            "episode": {
                "season": 35,
                "number": 9,
                "title": "Spy in the Wild: Friendship",
                "ids": {
                    "trakt": 2487475,
                    "tvdb": 5953896,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Nature",
                "year": 1982,
                "ids": {
                    "trakt": 14886,
                    "slug": "nature",
                    "tvdb": 81157,
                    "imdb": "tt0083452",
                    "tmdb": 14951,
                    "tvrage": 6773
                }
            }
        }, {
            "first_aired": "2017-02-16T01:30:00.000Z",
            "episode": {
                "season": 1,
                "number": 15,
                "title": "T-H-- THE C-L-- CLUB",
                "ids": {
                    "trakt": 2467732,
                    "tvdb": 5923141,
                    "imdb": "tt6364924",
                    "tmdb": 1262880,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Speechless",
                "year": 2016,
                "ids": {
                    "trakt": 107780,
                    "slug": "speechless-2016",
                    "tvdb": 311875,
                    "imdb": "tt5592146",
                    "tmdb": 67040,
                    "tvrage": 51643
                }
            }
        }, {
            "first_aired": "2017-02-16T02:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 3,
                "title": "The Four Horsemen",
                "ids": {
                    "trakt": 2332358,
                    "tvdb": 5904887,
                    "imdb": "tt6009796",
                    "tmdb": 1259904,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The 100",
                "year": 2014,
                "ids": {
                    "trakt": 48562,
                    "slug": "the-100",
                    "tvdb": 268592,
                    "imdb": "tt2661044",
                    "tmdb": 48866,
                    "tvrage": 34770
                }
            }
        }, {
            "first_aired": "2017-02-16T02:00:00.000Z",
            "episode": {
                "season": 18,
                "number": 11,
                "title": "Great Expectations",
                "ids": {
                    "trakt": 2395922,
                    "tvdb": 5826568,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Law & Order: Special Victims Unit",
                "year": 1999,
                "ids": {
                    "trakt": 2716,
                    "slug": "law-order-special-victims-unit",
                    "tvdb": 75692,
                    "imdb": "tt0203259",
                    "tmdb": 2734,
                    "tvrage": 4204
                }
            }
        }, {
            "first_aired": "2017-02-16T02:00:00.000Z",
            "episode": {
                "season": 12,
                "number": 13,
                "title": "Spencer",
                "ids": {
                    "trakt": 2398051,
                    "tvdb": 5831007,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Criminal Minds",
                "year": 2005,
                "ids": {
                    "trakt": 4033,
                    "slug": "criminal-minds",
                    "tvdb": 75710,
                    "imdb": "tt0452046",
                    "tmdb": 4057,
                    "tvrage": 3171
                }
            }
        }, {
            "first_aired": "2017-02-16T02:00:00.000Z",
            "episode": {
                "season": 8,
                "number": 13,
                "title": "Do It Yourself",
                "ids": {
                    "trakt": 2420132,
                    "tvdb": 5966852,
                    "imdb": null,
                    "tmdb": 1266754,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Modern Family",
                "year": 2009,
                "ids": {
                    "trakt": 1412,
                    "slug": "modern-family",
                    "tvdb": 95011,
                    "imdb": "tt1442437",
                    "tmdb": 1421,
                    "tvrage": 22622
                }
            }
        }, {
            "first_aired": "2017-02-16T02:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 8,
                "title": "Mama's Boy",
                "ids": {
                    "trakt": 2437747,
                    "tvdb": 5885314,
                    "imdb": "tt6338098",
                    "tmdb": 1266946,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Star",
                "year": 2016,
                "ids": {
                    "trakt": 107740,
                    "slug": "star",
                    "tvdb": 311810,
                    "imdb": null,
                    "tmdb": 68780,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T02:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 4,
                "title": "The Flying Forest",
                "ids": {
                    "trakt": 2446656,
                    "tvdb": 5895893,
                    "imdb": "tt5890464",
                    "tmdb": 1260166,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The Magicians",
                "year": 2015,
                "ids": {
                    "trakt": 100940,
                    "slug": "the-magicians-2015",
                    "tvdb": 299139,
                    "imdb": "tt4254242",
                    "tmdb": 64432,
                    "tvrage": 43586
                }
            }
        }, {
            "first_aired": "2017-02-16T02:00:00.000Z",
            "episode": {
                "season": 44,
                "number": 12,
                "title": "The Origami Revolution",
                "ids": {
                    "trakt": 2466883,
                    "tvdb": 5921761,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "NOVA",
                "year": 1974,
                "ids": {
                    "trakt": 3540,
                    "slug": "nova",
                    "tvdb": 76119,
                    "imdb": "tt0206501",
                    "tmdb": 3562,
                    "tvrage": 6771
                }
            }
        }, {
            "first_aired": "2017-02-16T02:00:00.000Z",
            "episode": {
                "season": 5,
                "number": 6,
                "title": "Dushi or Don't She",
                "ids": {
                    "trakt": 2474991,
                    "tvdb": 5936074,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Black Ink Crew",
                "year": 2013,
                "ids": {
                    "trakt": 58409,
                    "slug": "black-ink-crew",
                    "tvdb": 265155,
                    "imdb": "tt2738096",
                    "tmdb": 58796,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T02:00:00.000Z",
            "episode": {
                "season": 0,
                "number": 39,
                "title": "Global Game Show: Aussie Adventure",
                "ids": {
                    "trakt": 2483984,
                    "tvdb": 5948059,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Expedition Unknown",
                "year": 2015,
                "ids": {
                    "trakt": 82067,
                    "slug": "expedition-unknown",
                    "tvdb": 280316,
                    "imdb": "tt4305162",
                    "tmdb": 61833,
                    "tvrage": 46394
                }
            }
        }, {
            "first_aired": "2017-02-16T02:00:00.000Z",
            "episode": {
                "season": 8,
                "number": 3,
                "title": "Hail Mary",
                "ids": {
                    "trakt": 2487533,
                    "tvdb": 5953960,
                    "imdb": null,
                    "tmdb": 1267683,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Bering Sea Gold",
                "year": 2012,
                "ids": {
                    "trakt": 58318,
                    "slug": "bering-sea-gold",
                    "tvdb": 254203,
                    "imdb": "tt2182427",
                    "tmdb": 58704,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T02:00:00.000Z",
            "episode": {
                "season": 2017,
                "number": 33,
                "title": "February 15, 2017",
                "ids": {
                    "trakt": 2489839,
                    "tvdb": 5958954,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Rachel Maddow Show",
                "year": 2008,
                "ids": {
                    "trakt": 7921,
                    "slug": "the-rachel-maddow-show",
                    "tvdb": 181561,
                    "imdb": "tt1280627",
                    "tmdb": 7967,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T02:00:00.000Z",
            "episode": {
                "season": 5,
                "number": 6,
                "title": "No Bro-Code",
                "ids": {
                    "trakt": 2494142,
                    "tvdb": 5965565,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Are You the One?",
                "year": 2014,
                "ids": {
                    "trakt": 75349,
                    "slug": "are-you-the-one",
                    "tvdb": 277230,
                    "imdb": "tt3484274",
                    "tmdb": 61535,
                    "tvrage": 39927
                }
            }
        }, {
            "first_aired": "2017-02-16T02:30:00.000Z",
            "episode": {
                "season": 3,
                "number": 15,
                "title": "I'm A Survivor",
                "ids": {
                    "trakt": 2450938,
                    "tvdb": 5856580,
                    "imdb": "tt5569940",
                    "tmdb": 1262875,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Black-ish",
                "year": 2014,
                "ids": {
                    "trakt": 77807,
                    "slug": "black-ish",
                    "tvdb": 281511,
                    "imdb": "tt3487356",
                    "tmdb": 61381,
                    "tvrage": 38317
                }
            }
        }, {
            "first_aired": "2017-02-16T03:00:00.000Z",
            "episode": {
                "season": 23,
                "number": 11,
                "title": "Celebrity Life",
                "ids": {
                    "trakt": 2162163,
                    "tvdb": 5966293,
                    "imdb": null,
                    "tmdb": 0,
                    "tvrage": null
                }
            },
            "show": {
                "title": "America's Next Top Model",
                "year": 2003,
                "ids": {
                    "trakt": 330,
                    "slug": "america-s-next-top-model",
                    "tvdb": 71721,
                    "imdb": "tt0363307",
                    "tmdb": 331,
                    "tvrage": 2589
                }
            }
        }, {
            "first_aired": "2017-02-16T03:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 5,
                "title": "Collateral",
                "ids": {
                    "trakt": 2263583,
                    "tvdb": 5650995,
                    "imdb": "tt5558572",
                    "tmdb": 1201857,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "SIX",
                "year": 2017,
                "ids": {
                    "trakt": 107744,
                    "slug": "six-2017",
                    "tvdb": 311809,
                    "imdb": "tt5541338",
                    "tmdb": 66871,
                    "tvrage": 50829
                }
            }
        }, {
            "first_aired": "2017-02-16T03:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 1,
                "title": "Pilot",
                "ids": {
                    "trakt": 2285143,
                    "tvdb": 5677366,
                    "imdb": null,
                    "tmdb": 1244960,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Doubt",
                "year": 2017,
                "ids": {
                    "trakt": 107840,
                    "slug": "doubt",
                    "tvdb": 311968,
                    "imdb": "tt4447390",
                    "tmdb": 68950,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T03:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 14,
                "title": "Admission of Guilt",
                "ids": {
                    "trakt": 2294851,
                    "tvdb": 5938977,
                    "imdb": "tt5895116",
                    "tmdb": 1260153,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Suits",
                "year": 2011,
                "ids": {
                    "trakt": 37522,
                    "slug": "suits",
                    "tvdb": 247808,
                    "imdb": "tt1632701",
                    "tmdb": 37680,
                    "tvrage": 27518
                }
            }
        }, {
            "first_aired": "2017-02-16T03:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 14,
                "title": "Seven Indictments",
                "ids": {
                    "trakt": 2313324,
                    "tvdb": 5940103,
                    "imdb": "tt6464116",
                    "tmdb": 1260512,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Chicago P.D.",
                "year": 2014,
                "ids": {
                    "trakt": 58454,
                    "slug": "chicago-p-d",
                    "tvdb": 269641,
                    "imdb": "tt2805096",
                    "tmdb": 58841,
                    "tvrage": 35802
                }
            }
        }, {
            "first_aired": "2017-02-16T03:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 4,
                "title": "Godspeed",
                "ids": {
                    "trakt": 2332386,
                    "tvdb": 5739001,
                    "imdb": "tt5625506",
                    "tmdb": 1262477,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The Expanse",
                "year": 2015,
                "ids": {
                    "trakt": 77199,
                    "slug": "the-expanse",
                    "tvdb": 280619,
                    "imdb": "tt3230854",
                    "tmdb": 63639,
                    "tvrage": 41967
                }
            }
        }, {
            "first_aired": "2017-02-16T03:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 2,
                "title": "Chapter 2",
                "ids": {
                    "trakt": 2461697,
                    "tvdb": 5956607,
                    "imdb": "tt6157742",
                    "tmdb": 1209311,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Legion",
                "year": 2017,
                "ids": {
                    "trakt": 113656,
                    "slug": "legion",
                    "tvdb": 320724,
                    "imdb": "tt5114356",
                    "tmdb": 67195,
                    "tvrage": 52471
                }
            }
        }, {
            "first_aired": "2017-02-16T03:00:00.000Z",
            "episode": {
                "season": 7,
                "number": 6,
                "title": "The Most Dangerless Game",
                "ids": {
                    "trakt": 2474529,
                    "tvdb": 5935123,
                    "imdb": null,
                    "tmdb": 1259297,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Workaholics",
                "year": 2011,
                "ids": {
                    "trakt": 36837,
                    "slug": "workaholics",
                    "tvdb": 211751,
                    "imdb": "tt1610527",
                    "tmdb": 36994,
                    "tvrage": 23658
                }
            }
        }, {
            "first_aired": "2017-02-16T03:00:00.000Z",
            "episode": {
                "season": 3,
                "number": 3,
                "title": "Bro, They're Surrounding Us!",
                "ids": {
                    "trakt": 2476785,
                    "tvdb": 5938162,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Carbonaro Effect",
                "year": 2014,
                "ids": {
                    "trakt": 60461,
                    "slug": "the-carbonaro-effect",
                    "tvdb": 281110,
                    "imdb": "tt3559912",
                    "tmdb": 60913,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T03:00:00.000Z",
            "episode": {
                "season": 12,
                "number": 7,
                "title": "PTSDee",
                "ids": {
                    "trakt": 2480986,
                    "tvdb": 5942882,
                    "imdb": "tt4464054",
                    "tmdb": 1260573,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "It's Always Sunny in Philadelphia",
                "year": 2005,
                "ids": {
                    "trakt": 2692,
                    "slug": "it-s-always-sunny-in-philadelphia",
                    "tvdb": 75805,
                    "imdb": "tt0472954",
                    "tmdb": 2710,
                    "tvrage": 4004
                }
            }
        }, {
            "first_aired": "2017-02-16T03:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 9,
                "title": "I'll Never Tire of It",
                "ids": {
                    "trakt": 2488280,
                    "tvdb": 5955827,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Blue Collar Millionaires",
                "year": 2015,
                "ids": {
                    "trakt": 100315,
                    "slug": "blue-collar-millionaires",
                    "tvdb": 297509,
                    "imdb": null,
                    "tmdb": 66412,
                    "tvrage": 50008
                }
            }
        }, {
            "first_aired": "2017-02-16T03:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 3,
                "title": "Rain Don't Slow Ted's Game",
                "ids": {
                    "trakt": 2488285,
                    "tvdb": 5955844,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "South Beach Classics",
                "year": 2011,
                "ids": {
                    "trakt": 38529,
                    "slug": "south-beach-classics",
                    "tvdb": 243681,
                    "imdb": null,
                    "tmdb": 38690,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T03:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 7,
                "title": "Full Court Press",
                "ids": {
                    "trakt": 2489634,
                    "tvdb": 5958290,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Vivica's Black Magic",
                "year": 2017,
                "ids": {
                    "trakt": 115614,
                    "slug": "vivica-s-black-magic",
                    "tvdb": 322064,
                    "imdb": null,
                    "tmdb": 69388,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T03:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 5,
                "title": "Adam Carolla; Ana Gasteyer; Cheryl Hines; Jenna Fischer; Justin Long and Kenan Thompson.",
                "ids": {
                    "trakt": 2492268,
                    "tvdb": 5962695,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Match Game",
                "year": 2016,
                "ids": {
                    "trakt": 108134,
                    "slug": "match-game-2016",
                    "tvdb": 312575,
                    "imdb": "tt5672484",
                    "tmdb": 67229,
                    "tvrage": 52305
                }
            }
        }, {
            "first_aired": "2017-02-16T03:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 7,
                "title": "Mercury",
                "ids": {
                    "trakt": 2493003,
                    "tvdb": 5963568,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Too Close to Home",
                "year": 2016,
                "ids": {
                    "trakt": 110301,
                    "slug": "too-close-to-home",
                    "tvdb": 315186,
                    "imdb": "tt5596646",
                    "tmdb": 67396,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T03:30:00.000Z",
            "episode": {
                "season": 1,
                "number": 10,
                "title": "Smoking Sativa S'mores",
                "ids": {
                    "trakt": 2434047,
                    "tvdb": 5878360,
                    "imdb": null,
                    "tmdb": 1259814,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Bong Appétit",
                "year": 2016,
                "ids": {
                    "trakt": 113834,
                    "slug": "bong-appetit",
                    "tvdb": 321062,
                    "imdb": null,
                    "tmdb": 69117,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T03:30:00.000Z",
            "episode": {
                "season": 3,
                "number": 7,
                "title": "Bagel",
                "ids": {
                    "trakt": 2451977,
                    "tvdb": 5903126,
                    "imdb": "tt5993790",
                    "tmdb": 1263168,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Man Seeking Woman",
                "year": 2015,
                "ids": {
                    "trakt": 79265,
                    "slug": "man-seeking-woman",
                    "tvdb": 283346,
                    "imdb": "tt4189492",
                    "tmdb": 61871,
                    "tvrage": 36471
                }
            }
        }, {
            "first_aired": "2017-02-16T03:30:00.000Z",
            "episode": {
                "season": 2,
                "number": 1,
                "title": "February 15, 2017",
                "ids": {
                    "trakt": 2487529,
                    "tvdb": 5953631,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Full Frontal with Samantha Bee",
                "year": 2016,
                "ids": {
                    "trakt": 103588,
                    "slug": "full-frontal-with-samantha-bee",
                    "tvdb": 303438,
                    "imdb": "tt5323988",
                    "tmdb": 65592,
                    "tvrage": 50654
                }
            }
        }, {
            "first_aired": "2017-02-16T04:00:00.000Z",
            "episode": {
                "season": 22,
                "number": 66,
                "title": "Charlie Day",
                "ids": {
                    "trakt": 2484038,
                    "tvdb": 5948147,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Daily Show",
                "year": 1996,
                "ids": {
                    "trakt": 2211,
                    "slug": "the-daily-show",
                    "tvdb": 71256,
                    "imdb": "tt0115147",
                    "tmdb": 2224,
                    "tvrage": 5714
                }
            }
        }, {
            "first_aired": "2017-02-16T04:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 26,
                "title": "Wil Wheaton, Colton Dunn, Heather Anne Campbell",
                "ids": {
                    "trakt": 2489026,
                    "tvdb": 5957597,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "@midnight",
                "year": 2013,
                "ids": {
                    "trakt": 60550,
                    "slug": "midnight",
                    "tvdb": 274099,
                    "imdb": "tt3279494",
                    "tmdb": 61025,
                    "tvrage": 38478
                }
            }
        }, {
            "first_aired": "2017-02-16T04:35:00.000Z",
            "episode": {
                "season": 2,
                "number": 96,
                "title": "Bob Odenkirk, Tatiana Maslany, George Saunders",
                "ids": {
                    "trakt": 2492961,
                    "tvdb": 5963947,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Late Show with Stephen Colbert",
                "year": 2015,
                "ids": {
                    "trakt": 93737,
                    "slug": "the-late-show-with-stephen-colbert",
                    "tvdb": 289574,
                    "imdb": "tt3697842",
                    "tmdb": 63770,
                    "tvrage": 41941
                }
            }
        }, {
            "first_aired": "2017-02-16T05:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 4,
                "title": null,
                "ids": {
                    "trakt": 2492162,
                    "tvdb": 5963144,
                    "imdb": null,
                    "tmdb": 1260992,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Squad Wars",
                "year": 2017,
                "ids": {
                    "trakt": 116444,
                    "slug": "squad-wars",
                    "tvdb": 323863,
                    "imdb": null,
                    "tmdb": 69917,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T05:35:00.000Z",
            "episode": {
                "season": 2,
                "number": 130,
                "title": "Matt Damon, Will Arnett, Anderson .Paak",
                "ids": {
                    "trakt": 2493361,
                    "tvdb": 5964403,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Late Late Show with James Corden",
                "year": 2015,
                "ids": {
                    "trakt": 96473,
                    "slug": "the-late-late-show-with-james-corden",
                    "tvdb": 292421,
                    "imdb": "tt4280606",
                    "tmdb": 62223,
                    "tvrage": 44904
                }
            }
        }, {
            "first_aired": "2017-02-16T05:35:00.000Z",
            "episode": {
                "season": 2017,
                "number": 24,
                "title": "Tracy Morgan, Abigail Spencer, Bebe Rexha, Brann Dailor",
                "ids": {
                    "trakt": 2493367,
                    "tvdb": 5964398,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Late Night with Seth Meyers",
                "year": 2014,
                "ids": {
                    "trakt": 75199,
                    "slug": "late-night-with-seth-meyers",
                    "tvdb": 270262,
                    "imdb": "tt3513388",
                    "tmdb": 61818,
                    "tvrage": 35852
                }
            }
        }, {
            "first_aired": "2017-02-16T06:30:00.000Z",
            "episode": {
                "season": 16,
                "number": 56,
                "title": "Abigail Spencer, Mothers, Amma Asante",
                "ids": {
                    "trakt": 2493310,
                    "tvdb": 5964408,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Last Call with Carson Daly",
                "year": 2002,
                "ids": {
                    "trakt": 5303,
                    "slug": "last-call-with-carson-daly",
                    "tvdb": 78057,
                    "imdb": "tt0305056",
                    "tmdb": 5330,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T11:00:00.000Z",
            "episode": {
                "season": 0,
                "number": 846,
                "title": "- Good Mythical More",
                "ids": {
                    "trakt": 2494134,
                    "tvdb": 5965551,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Good Mythical Morning",
                "year": 2012,
                "ids": {
                    "trakt": 94860,
                    "slug": "good-mythical-morning",
                    "tvdb": 290686,
                    "imdb": "tt4087032",
                    "tmdb": 65701,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T11:00:00.000Z",
            "episode": {
                "season": 11,
                "number": 24,
                "title": null,
                "ids": {
                    "trakt": 2494137,
                    "tvdb": 5965544,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Good Mythical Morning",
                "year": 2012,
                "ids": {
                    "trakt": 94860,
                    "slug": "good-mythical-morning",
                    "tvdb": 290686,
                    "imdb": "tt4087032",
                    "tmdb": 65701,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T16:00:00.000Z",
            "episode": {
                "season": 45,
                "number": 101,
                "title": "2017-02-16",
                "ids": {
                    "trakt": 2494608,
                    "tvdb": 5966254,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Price Is Right",
                "year": 1972,
                "ids": {
                    "trakt": 2038,
                    "slug": "the-price-is-right",
                    "tvdb": 77072,
                    "imdb": "tt0068120",
                    "tmdb": 2051,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T16:15:00.000Z",
            "episode": {
                "season": 30,
                "number": 289,
                "title": "Ep. #7526",
                "ids": {
                    "trakt": 2495223,
                    "tvdb": 5967177,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Bold and the Beautiful",
                "year": 1987,
                "ids": {
                    "trakt": 6608,
                    "slug": "the-bold-and-the-beautiful",
                    "tvdb": 79838,
                    "imdb": "tt0092325",
                    "tmdb": 6647,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T17:30:00.000Z",
            "episode": {
                "season": 44,
                "number": 118,
                "title": "Episode 11117 - February 16, 2017",
                "ids": {
                    "trakt": 2495231,
                    "tvdb": 5967171,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Young and the Restless",
                "year": 1973,
                "ids": {
                    "trakt": 1049,
                    "slug": "the-young-and-the-restless",
                    "tvdb": 70328,
                    "imdb": "tt0069658",
                    "tmdb": 1054,
                    "tvrage": 6318
                }
            }
        }, {
            "first_aired": "2017-02-16T18:00:00.000Z",
            "episode": {
                "season": 52,
                "number": 105,
                "title": "Thursday Febuary 16, 2017",
                "ids": {
                    "trakt": 2494529,
                    "tvdb": 5966268,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Days of Our Lives",
                "year": 1965,
                "ids": {
                    "trakt": 876,
                    "slug": "days-of-our-lives",
                    "tvdb": 70366,
                    "imdb": "tt0058796",
                    "tmdb": 881,
                    "tvrage": 3256
                }
            }
        }, {
            "first_aired": "2017-02-16T19:00:00.000Z",
            "episode": {
                "season": 54,
                "number": 218,
                "title": "#13748",
                "ids": {
                    "trakt": 2474280,
                    "tvdb": 5933949,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "General Hospital",
                "year": 1963,
                "ids": {
                    "trakt": 982,
                    "slug": "general-hospital",
                    "tvdb": 75332,
                    "imdb": "tt0056758",
                    "tmdb": 987,
                    "tvrage": 3653
                }
            }
        }, {
            "first_aired": "2017-02-16T20:00:00.000Z",
            "episode": {
                "season": 15,
                "number": 102,
                "title": "Multiple Restraining Orders and Fake Births: What's Next?",
                "ids": {
                    "trakt": 2494628,
                    "tvdb": 5966250,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dr. Phil",
                "year": 2002,
                "ids": {
                    "trakt": 4628,
                    "slug": "dr-phil",
                    "tvdb": 71424,
                    "imdb": "tt0329824",
                    "tmdb": 4652,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T21:00:00.000Z",
            "episode": {
                "season": 14,
                "number": 105,
                "title": "Matt Damon",
                "ids": {
                    "trakt": 2489874,
                    "tvdb": 5958995,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Ellen DeGeneres Show",
                "year": 2003,
                "ids": {
                    "trakt": 561,
                    "slug": "the-ellen-degeneres-show",
                    "tvdb": 72194,
                    "imdb": "tt0379623",
                    "tmdb": 562,
                    "tvrage": 5750
                }
            }
        }, {
            "first_aired": "2017-02-16T22:00:00.000Z",
            "episode": {
                "season": 21,
                "number": 138,
                "title": "Bookkeeper Caught Stealing!; Friend Bailout Bummer!",
                "ids": {
                    "trakt": 2493599,
                    "tvdb": 5964717,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Judge Judy",
                "year": 1996,
                "ids": {
                    "trakt": 3917,
                    "slug": "judge-judy",
                    "tvdb": 71221,
                    "imdb": "tt0115227",
                    "tmdb": 3940,
                    "tvrage": 7960
                }
            }
        }, {
            "first_aired": "2017-02-16T22:00:00.000Z",
            "episode": {
                "season": 21,
                "number": 139,
                "title": "Good Samaritan or Stalking Friend?; Blindside Collision?",
                "ids": {
                    "trakt": 2493600,
                    "tvdb": 5964719,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Judge Judy",
                "year": 1996,
                "ids": {
                    "trakt": 3917,
                    "slug": "judge-judy",
                    "tvdb": 71221,
                    "imdb": "tt0115227",
                    "tmdb": 3940,
                    "tvrage": 7960
                }
            }
        }, {
            "first_aired": "2017-02-16T22:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 34,
                "title": "Episode 34",
                "ids": {
                    "trakt": 2424433,
                    "tvdb": 5867017,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Pardon the Interruption",
                "year": 2001,
                "ids": {
                    "trakt": 1889,
                    "slug": "pardon-the-interruption",
                    "tvdb": 266681,
                    "imdb": "tt0307800",
                    "tmdb": 1902,
                    "tvrage": 4774
                }
            }
        }, {
            "first_aired": "2017-02-16T23:00:00.000Z",
            "episode": {
                "season": 42,
                "number": 34,
                "title": "February 16, 2017",
                "ids": {
                    "trakt": 2461958,
                    "tvdb": 5918437,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "PBS NewsHour",
                "year": 1983,
                "ids": {
                    "trakt": 1644,
                    "slug": "pbs-newshour",
                    "tvdb": 81388,
                    "imdb": "tt0247880",
                    "tmdb": 1655,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T23:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 47,
                "title": "Feb 16 Thu",
                "ids": {
                    "trakt": 2488922,
                    "tvdb": 5956496,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "NBC Nightly News",
                "year": 1970,
                "ids": {
                    "trakt": 823,
                    "slug": "nbc-nightly-news",
                    "tvdb": 139911,
                    "imdb": "tt0231035",
                    "tmdb": 826,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T23:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 47,
                "title": "Feb 16 Thu",
                "ids": {
                    "trakt": 2490340,
                    "tvdb": 5959195,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "CBS Evening News",
                "year": 1962,
                "ids": {
                    "trakt": 635,
                    "slug": "cbs-evening-news",
                    "tvdb": 74468,
                    "imdb": null,
                    "tmdb": 637,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-16T23:30:00.000Z",
            "episode": {
                "season": 34,
                "number": 114,
                "title": "Episode 114",
                "ids": {
                    "trakt": 2492648,
                    "tvdb": 5963344,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Wheel of Fortune",
                "year": 1983,
                "ids": {
                    "trakt": 2760,
                    "slug": "wheel-of-fortune",
                    "tvdb": 76573,
                    "imdb": "tt0072584",
                    "tmdb": 2778,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T00:00:00.000Z",
            "episode": {
                "season": 2017,
                "number": 34,
                "title": "S33 College Championship Quarterfinal Game 4",
                "ids": {
                    "trakt": 2484027,
                    "tvdb": 5948135,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Jeopardy!",
                "year": 1964,
                "ids": {
                    "trakt": 2893,
                    "slug": "jeopardy",
                    "tvdb": 77075,
                    "imdb": "tt0159881",
                    "tmdb": 2912,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T00:30:00.000Z",
            "episode": {
                "season": 1,
                "number": 82,
                "title": "Episode 82",
                "ids": {
                    "trakt": 2451481,
                    "tvdb": 5902561,
                    "imdb": null,
                    "tmdb": 1251124,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Vice News Tonight",
                "year": 2016,
                "ids": {
                    "trakt": 111550,
                    "slug": "vice-news-tonight",
                    "tvdb": 317479,
                    "imdb": "tt6329790",
                    "tmdb": 67584,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T00:30:00.000Z",
            "episode": {
                "season": 2,
                "number": 35,
                "title": "The Hard Way",
                "ids": {
                    "trakt": 2480887,
                    "tvdb": 5942781,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Star vs. the Forces of Evil",
                "year": 2015,
                "ids": {
                    "trakt": 80083,
                    "slug": "star-vs-the-forces-of-evil",
                    "tvdb": 282994,
                    "imdb": "tt2758770",
                    "tmdb": 61923,
                    "tvrage": 47307
                }
            }
        }, {
            "first_aired": "2017-02-17T00:30:00.000Z",
            "episode": {
                "season": 5,
                "number": 17,
                "title": "The Console",
                "ids": {
                    "trakt": 2488568,
                    "tvdb": 5956601,
                    "imdb": null,
                    "tmdb": 1267675,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The Amazing World of Gumball",
                "year": 2011,
                "ids": {
                    "trakt": 37448,
                    "slug": "the-amazing-world-of-gumball",
                    "tvdb": 248482,
                    "imdb": "tt1942683",
                    "tmdb": 37606,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T01:00:00.000Z",
            "episode": {
                "season": 5,
                "number": 2,
                "title": "Quest for an Apron (2)",
                "ids": {
                    "trakt": 2393858,
                    "tvdb": 5822477,
                    "imdb": null,
                    "tmdb": 1244108,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "MasterChef Junior",
                "year": 2013,
                "ids": {
                    "trakt": 57382,
                    "slug": "masterchef-junior",
                    "tvdb": 271863,
                    "imdb": "tt3038248",
                    "tmdb": 57755,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T01:00:00.000Z",
            "episode": {
                "season": 12,
                "number": 12,
                "title": "Stuck in the Middle (With You)",
                "ids": {
                    "trakt": 2471180,
                    "tvdb": 5929894,
                    "imdb": "tt5669130",
                    "tmdb": 1260842,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Supernatural",
                "year": 2005,
                "ids": {
                    "trakt": 1611,
                    "slug": "supernatural",
                    "tvdb": 78901,
                    "imdb": "tt0460681",
                    "tmdb": 1622,
                    "tvrage": 5410
                }
            }
        }, {
            "first_aired": "2017-02-17T01:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 6,
                "title": "The Lost Voice & Half-Baked",
                "ids": {
                    "trakt": 2471223,
                    "tvdb": 5930063,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Revenge Body with Khloé Kardashian",
                "year": 2017,
                "ids": {
                    "trakt": 113407,
                    "slug": "revenge-body-with-khloe-kardashian",
                    "tvdb": 320229,
                    "imdb": null,
                    "tmdb": 69604,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T01:00:00.000Z",
            "episode": {
                "season": 13,
                "number": 13,
                "title": "It Only Gets Much Worse",
                "ids": {
                    "trakt": 2478779,
                    "tvdb": 5939670,
                    "imdb": "tt6190636",
                    "tmdb": 1266249,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Grey's Anatomy",
                "year": 2005,
                "ids": {
                    "trakt": 1407,
                    "slug": "grey-s-anatomy",
                    "tvdb": 73762,
                    "imdb": "tt0413573",
                    "tmdb": 1416,
                    "tvrage": 3741
                }
            }
        }, {
            "first_aired": "2017-02-17T01:00:00.000Z",
            "episode": {
                "season": 10,
                "number": 16,
                "title": "The Allowance Evaporation",
                "ids": {
                    "trakt": 2478976,
                    "tvdb": 5939843,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Big Bang Theory",
                "year": 2007,
                "ids": {
                    "trakt": 1409,
                    "slug": "the-big-bang-theory",
                    "tvdb": 80379,
                    "imdb": "tt0898266",
                    "tmdb": 1418,
                    "tvrage": 8511
                }
            }
        }, {
            "first_aired": "2017-02-17T01:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 14,
                "title": "Super Hot Store",
                "ids": {
                    "trakt": 2486306,
                    "tvdb": 5952153,
                    "imdb": "tt6091598",
                    "tmdb": 1260453,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Superstore",
                "year": 2015,
                "ids": {
                    "trakt": 98985,
                    "slug": "superstore",
                    "tvdb": 295648,
                    "imdb": "tt4477976",
                    "tmdb": 62649,
                    "tvrage": 47320
                }
            }
        }, {
            "first_aired": "2017-02-17T01:00:00.000Z",
            "episode": {
                "season": 3,
                "number": 11,
                "title": "Green Fingers",
                "ids": {
                    "trakt": 2494598,
                    "tvdb": 5966386,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Henry Danger",
                "year": 2014,
                "ids": {
                    "trakt": 79317,
                    "slug": "henry-danger",
                    "tvdb": 284114,
                    "imdb": "tt3596174",
                    "tmdb": 61852,
                    "tvrage": 43498
                }
            }
        }, {
            "first_aired": "2017-02-17T01:30:00.000Z",
            "episode": {
                "season": 1,
                "number": 3,
                "title": "Sinking Day",
                "ids": {
                    "trakt": 2430084,
                    "tvdb": 5938958,
                    "imdb": "tt6400478",
                    "tmdb": 1262243,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Powerless",
                "year": 2017,
                "ids": {
                    "trakt": 107739,
                    "slug": "powerless",
                    "tvdb": 311786,
                    "imdb": "tt5083928",
                    "tmdb": 68001,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T01:30:00.000Z",
            "episode": {
                "season": 1,
                "number": 13,
                "title": "DTR",
                "ids": {
                    "trakt": 2482905,
                    "tvdb": 5946910,
                    "imdb": null,
                    "tmdb": 1262883,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The Great Indoors",
                "year": 2016,
                "ids": {
                    "trakt": 107823,
                    "slug": "the-great-indoors",
                    "tvdb": 311948,
                    "imdb": "tt5485566",
                    "tmdb": 67157,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T02:00:00.000Z",
            "episode": {
                "season": 16,
                "number": 12,
                "title": "Love Hate / A Soldier's Life",
                "ids": {
                    "trakt": 2195171,
                    "tvdb": 5944075,
                    "imdb": null,
                    "tmdb": 1264197,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The First 48",
                "year": 2004,
                "ids": {
                    "trakt": 5119,
                    "slug": "the-first-48",
                    "tvdb": 81275,
                    "imdb": "tt0423652",
                    "tmdb": 5146,
                    "tvrage": 2300
                }
            }
        }, {
            "first_aired": "2017-02-17T02:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 14,
                "title": "Cold Front",
                "ids": {
                    "trakt": 2313895,
                    "tvdb": 5940106,
                    "imdb": "tt5915440",
                    "tmdb": 1260454,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Chicago Med",
                "year": 2015,
                "ids": {
                    "trakt": 98934,
                    "slug": "chicago-med",
                    "tvdb": 295640,
                    "imdb": "tt4655480",
                    "tmdb": 62650,
                    "tvrage": 47688
                }
            }
        }, {
            "first_aired": "2017-02-17T02:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 4,
                "title": "Chapter Four: The Last Picture Show",
                "ids": {
                    "trakt": 2347039,
                    "tvdb": 5757553,
                    "imdb": "tt5728924",
                    "tmdb": 1264931,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Riverdale",
                "year": 2017,
                "ids": {
                    "trakt": 107837,
                    "slug": "riverdale",
                    "tvdb": 311954,
                    "imdb": "tt5420376",
                    "tmdb": 69050,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T02:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 14,
                "title": "Roast Chicken and a Funny Story",
                "ids": {
                    "trakt": 2478481,
                    "tvdb": 5939216,
                    "imdb": "tt6458778",
                    "tmdb": 1263653,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Mom",
                "year": 2013,
                "ids": {
                    "trakt": 48704,
                    "slug": "mom",
                    "tvdb": 266967,
                    "imdb": "tt2660806",
                    "tmdb": 49011,
                    "tvrage": 33829
                }
            }
        }, {
            "first_aired": "2017-02-17T02:00:00.000Z",
            "episode": {
                "season": 5,
                "number": 8,
                "title": "Stand Beside Me",
                "ids": {
                    "trakt": 2483055,
                    "tvdb": 5946743,
                    "imdb": "tt5797332",
                    "tmdb": 1262864,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Nashville",
                "year": 2012,
                "ids": {
                    "trakt": 44301,
                    "slug": "nashville-2012",
                    "tvdb": 259055,
                    "imdb": "tt2281375",
                    "tmdb": 44549,
                    "tvrage": 30808
                }
            }
        }, {
            "first_aired": "2017-02-17T02:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 4,
                "title": "The Belt",
                "ids": {
                    "trakt": 2489741,
                    "tvdb": 5958548,
                    "imdb": "tt5786032",
                    "tmdb": 1265957,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Scandal",
                "year": 2012,
                "ids": {
                    "trakt": 39105,
                    "slug": "scandal",
                    "tvdb": 248841,
                    "imdb": "tt1837576",
                    "tmdb": 39269,
                    "tvrage": 28398
                }
            }
        }, {
            "first_aired": "2017-02-17T02:00:00.000Z",
            "episode": {
                "season": 2017,
                "number": 34,
                "title": "February 16, 2017",
                "ids": {
                    "trakt": 2489843,
                    "tvdb": 5958955,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Rachel Maddow Show",
                "year": 2008,
                "ids": {
                    "trakt": 7921,
                    "slug": "the-rachel-maddow-show",
                    "tvdb": 181561,
                    "imdb": "tt1280627",
                    "tmdb": 7967,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T02:30:00.000Z",
            "episode": {
                "season": 2,
                "number": 14,
                "title": "Facebook Fish Planner Backstage",
                "ids": {
                    "trakt": 2474759,
                    "tvdb": 5935809,
                    "imdb": "tt6443364",
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Life in Pieces",
                "year": 2015,
                "ids": {
                    "trakt": 99080,
                    "slug": "life-in-pieces",
                    "tvdb": 295778,
                    "imdb": "tt4384086",
                    "tmdb": 63398,
                    "tvrage": 47491
                }
            }
        }, {
            "first_aired": "2017-02-17T03:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 6,
                "title": "Fallout",
                "ids": {
                    "trakt": 2341310,
                    "tvdb": 5890234,
                    "imdb": "tt5845690",
                    "tmdb": 1255827,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Colony",
                "year": 2016,
                "ids": {
                    "trakt": 95966,
                    "slug": "colony",
                    "tvdb": 284210,
                    "imdb": "tt4209256",
                    "tmdb": 62858,
                    "tvrage": 42416
                }
            }
        }, {
            "first_aired": "2017-02-17T03:00:00.000Z",
            "episode": {
                "season": 7,
                "number": 7,
                "title": "Portland Secedes",
                "ids": {
                    "trakt": 2459589,
                    "tvdb": 5912395,
                    "imdb": null,
                    "tmdb": 1259305,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Portlandia",
                "year": 2011,
                "ids": {
                    "trakt": 33775,
                    "slug": "portlandia",
                    "tvdb": 213221,
                    "imdb": "tt1780441",
                    "tmdb": 33922,
                    "tvrage": 27219
                }
            }
        }, {
            "first_aired": "2017-02-17T03:00:00.000Z",
            "episode": {
                "season": 3,
                "number": 13,
                "title": "It's War",
                "ids": {
                    "trakt": 2478160,
                    "tvdb": 5938964,
                    "imdb": "tt5563368",
                    "tmdb": 1265616,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "How to Get Away with Murder",
                "year": 2014,
                "ids": {
                    "trakt": 60576,
                    "slug": "how-to-get-away-with-murder",
                    "tvdb": 281620,
                    "imdb": "tt3205802",
                    "tmdb": 61056,
                    "tvrage": 37307
                }
            }
        }, {
            "first_aired": "2017-02-17T03:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 14,
                "title": "The Architect",
                "ids": {
                    "trakt": 2479014,
                    "tvdb": 5939984,
                    "imdb": "tt6439022",
                    "tmdb": 1264194,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The Blacklist",
                "year": 2013,
                "ids": {
                    "trakt": 46676,
                    "slug": "the-blacklist",
                    "tvdb": 266189,
                    "imdb": "tt2741602",
                    "tmdb": 46952,
                    "tvrage": 35048
                }
            }
        }, {
            "first_aired": "2017-02-17T03:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 3,
                "title": "Trigger Time",
                "ids": {
                    "trakt": 2481497,
                    "tvdb": 5944049,
                    "imdb": "tt5741486",
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Training Day",
                "year": 2017,
                "ids": {
                    "trakt": 107821,
                    "slug": "training-day",
                    "tvdb": 311949,
                    "imdb": "tt4946972",
                    "tmdb": 68000,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T03:00:00.000Z",
            "episode": {
                "season": 124,
                "number": 2,
                "title": "Baltimore Style Battle",
                "ids": {
                    "trakt": 2486587,
                    "tvdb": 5952845,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "House Hunters",
                "year": 1999,
                "ids": {
                    "trakt": 6441,
                    "slug": "house-hunters",
                    "tvdb": 73182,
                    "imdb": "tt0369117",
                    "tmdb": 6480,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T03:00:00.000Z",
            "episode": {
                "season": 11,
                "number": 7,
                "title": "You Won't Like Him When He's Angry",
                "ids": {
                    "trakt": 2487242,
                    "tvdb": 5953529,
                    "imdb": null,
                    "tmdb": 1263388,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Beat Bobby Flay",
                "year": 2014,
                "ids": {
                    "trakt": 76491,
                    "slug": "beat-bobby-flay",
                    "tvdb": 279264,
                    "imdb": "tt3205302",
                    "tmdb": 62481,
                    "tvrage": 37002
                }
            }
        }, {
            "first_aired": "2017-02-17T03:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 13,
                "title": "It Was Before You Were Born",
                "ids": {
                    "trakt": 2487425,
                    "tvdb": 5953835,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "That Awkward Game Show",
                "year": 2016,
                "ids": {
                    "trakt": 111754,
                    "slug": "that-awkward-game-show",
                    "tvdb": 317813,
                    "imdb": "tt6145922",
                    "tmdb": 68227,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T03:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 2,
                "title": "Lady and the Tramp",
                "ids": {
                    "trakt": 2489638,
                    "tvdb": 5958300,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Impractical Jokers",
                "year": 2011,
                "ids": {
                    "trakt": 58794,
                    "slug": "impractical-jokers",
                    "tvdb": 254243,
                    "imdb": "tt2100976",
                    "tmdb": 59186,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T03:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 5,
                "title": "Fight",
                "ids": {
                    "trakt": 2490479,
                    "tvdb": 5960670,
                    "imdb": "tt6363614",
                    "tmdb": 1267007,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Baskets",
                "year": 2016,
                "ids": {
                    "trakt": 103358,
                    "slug": "baskets",
                    "tvdb": 303069,
                    "imdb": "tt3468798",
                    "tmdb": 64551,
                    "tvrage": 44562
                }
            }
        }, {
            "first_aired": "2017-02-17T03:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 2,
                "title": " Family Ties",
                "ids": {
                    "trakt": 2493141,
                    "tvdb": 5964178,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Nightwatch",
                "year": 2015,
                "ids": {
                    "trakt": 94724,
                    "slug": "nightwatch",
                    "tvdb": 290557,
                    "imdb": "tt4287464",
                    "tmdb": 64559,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T03:00:00.000Z",
            "episode": {
                "season": 14,
                "number": 12,
                "title": "Cooking Away in Margaritaville",
                "ids": {
                    "trakt": 2494591,
                    "tvdb": 5965539,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Top Chef",
                "year": 2006,
                "ids": {
                    "trakt": 41613,
                    "slug": "top-chef",
                    "tvdb": 79313,
                    "imdb": "tt0765425",
                    "tmdb": 41822,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T03:30:00.000Z",
            "episode": {
                "season": 103,
                "number": 11,
                "title": "Beach or Bust in Panama",
                "ids": {
                    "trakt": 2479586,
                    "tvdb": 5941376,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "House Hunters International",
                "year": 2006,
                "ids": {
                    "trakt": 29047,
                    "slug": "house-hunters-international",
                    "tvdb": 183411,
                    "imdb": "tt0795129",
                    "tmdb": 29173,
                    "tvrage": 16886
                }
            }
        }, {
            "first_aired": "2017-02-17T04:00:00.000Z",
            "episode": {
                "season": 22,
                "number": 67,
                "title": "Ezra Edelman",
                "ids": {
                    "trakt": 2484041,
                    "tvdb": 5948148,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Daily Show",
                "year": 1996,
                "ids": {
                    "trakt": 2211,
                    "slug": "the-daily-show",
                    "tvdb": 71256,
                    "imdb": "tt0115147",
                    "tmdb": 2224,
                    "tvrage": 5714
                }
            }
        }, {
            "first_aired": "2017-02-17T04:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 27,
                "title": "Grace Helbig, Hannah Hart, Mamrie Hart",
                "ids": {
                    "trakt": 2489027,
                    "tvdb": 5957598,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "@midnight",
                "year": 2013,
                "ids": {
                    "trakt": 60550,
                    "slug": "midnight",
                    "tvdb": 274099,
                    "imdb": "tt3279494",
                    "tmdb": 61025,
                    "tvrage": 38478
                }
            }
        }, {
            "first_aired": "2017-02-17T04:35:00.000Z",
            "episode": {
                "season": 2,
                "number": 97,
                "title": "Sally Field, Maggie Siff, Lady Antebellum",
                "ids": {
                    "trakt": 2492964,
                    "tvdb": 5963948,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Late Show with Stephen Colbert",
                "year": 2015,
                "ids": {
                    "trakt": 93737,
                    "slug": "the-late-show-with-stephen-colbert",
                    "tvdb": 289574,
                    "imdb": "tt3697842",
                    "tmdb": 63770,
                    "tvrage": 41941
                }
            }
        }, {
            "first_aired": "2017-02-17T08:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 1,
                "title": "Defenders of the Wing (2)",
                "ids": {
                    "trakt": 2477397,
                    "tvdb": 5938312,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dragons",
                "year": 2012,
                "ids": {
                    "trakt": 44060,
                    "slug": "dragons-2012",
                    "tvdb": 261202,
                    "imdb": "tt2325846",
                    "tmdb": 44305,
                    "tvrage": 31558
                }
            }
        }, {
            "first_aired": "2017-02-17T08:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 2,
                "title": "Episode 2",
                "ids": {
                    "trakt": 2488941,
                    "tvdb": 5957487,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dragons",
                "year": 2012,
                "ids": {
                    "trakt": 44060,
                    "slug": "dragons-2012",
                    "tvdb": 261202,
                    "imdb": "tt2325846",
                    "tmdb": 44305,
                    "tvrage": 31558
                }
            }
        }, {
            "first_aired": "2017-02-17T08:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 3,
                "title": "Episode 3",
                "ids": {
                    "trakt": 2488942,
                    "tvdb": 5957489,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dragons",
                "year": 2012,
                "ids": {
                    "trakt": 44060,
                    "slug": "dragons-2012",
                    "tvdb": 261202,
                    "imdb": "tt2325846",
                    "tmdb": 44305,
                    "tvrage": 31558
                }
            }
        }, {
            "first_aired": "2017-02-17T08:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 4,
                "title": "Episode 4",
                "ids": {
                    "trakt": 2488943,
                    "tvdb": 5957490,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dragons",
                "year": 2012,
                "ids": {
                    "trakt": 44060,
                    "slug": "dragons-2012",
                    "tvdb": 261202,
                    "imdb": "tt2325846",
                    "tmdb": 44305,
                    "tvrage": 31558
                }
            }
        }, {
            "first_aired": "2017-02-17T08:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 5,
                "title": "Episode 5",
                "ids": {
                    "trakt": 2488944,
                    "tvdb": 5957491,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dragons",
                "year": 2012,
                "ids": {
                    "trakt": 44060,
                    "slug": "dragons-2012",
                    "tvdb": 261202,
                    "imdb": "tt2325846",
                    "tmdb": 44305,
                    "tvrage": 31558
                }
            }
        }, {
            "first_aired": "2017-02-17T08:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 6,
                "title": "Episode 6",
                "ids": {
                    "trakt": 2488945,
                    "tvdb": 5957492,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dragons",
                "year": 2012,
                "ids": {
                    "trakt": 44060,
                    "slug": "dragons-2012",
                    "tvdb": 261202,
                    "imdb": "tt2325846",
                    "tmdb": 44305,
                    "tvrage": 31558
                }
            }
        }, {
            "first_aired": "2017-02-17T08:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 7,
                "title": "Episode 7",
                "ids": {
                    "trakt": 2488946,
                    "tvdb": 5957493,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dragons",
                "year": 2012,
                "ids": {
                    "trakt": 44060,
                    "slug": "dragons-2012",
                    "tvdb": 261202,
                    "imdb": "tt2325846",
                    "tmdb": 44305,
                    "tvrage": 31558
                }
            }
        }, {
            "first_aired": "2017-02-17T08:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 8,
                "title": "Episode 8",
                "ids": {
                    "trakt": 2488947,
                    "tvdb": 5957494,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dragons",
                "year": 2012,
                "ids": {
                    "trakt": 44060,
                    "slug": "dragons-2012",
                    "tvdb": 261202,
                    "imdb": "tt2325846",
                    "tmdb": 44305,
                    "tvrage": 31558
                }
            }
        }, {
            "first_aired": "2017-02-17T08:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 9,
                "title": "Episode 9",
                "ids": {
                    "trakt": 2488948,
                    "tvdb": 5957495,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dragons",
                "year": 2012,
                "ids": {
                    "trakt": 44060,
                    "slug": "dragons-2012",
                    "tvdb": 261202,
                    "imdb": "tt2325846",
                    "tmdb": 44305,
                    "tvrage": 31558
                }
            }
        }, {
            "first_aired": "2017-02-17T08:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 10,
                "title": "Episode 10",
                "ids": {
                    "trakt": 2488951,
                    "tvdb": 5957496,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dragons",
                "year": 2012,
                "ids": {
                    "trakt": 44060,
                    "slug": "dragons-2012",
                    "tvdb": 261202,
                    "imdb": "tt2325846",
                    "tmdb": 44305,
                    "tvrage": 31558
                }
            }
        }, {
            "first_aired": "2017-02-17T08:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 11,
                "title": "Episode 11",
                "ids": {
                    "trakt": 2488952,
                    "tvdb": 5957497,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dragons",
                "year": 2012,
                "ids": {
                    "trakt": 44060,
                    "slug": "dragons-2012",
                    "tvdb": 261202,
                    "imdb": "tt2325846",
                    "tmdb": 44305,
                    "tvrage": 31558
                }
            }
        }, {
            "first_aired": "2017-02-17T08:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 12,
                "title": "Episode 12",
                "ids": {
                    "trakt": 2488953,
                    "tvdb": 5957498,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dragons",
                "year": 2012,
                "ids": {
                    "trakt": 44060,
                    "slug": "dragons-2012",
                    "tvdb": 261202,
                    "imdb": "tt2325846",
                    "tmdb": 44305,
                    "tvrage": 31558
                }
            }
        }, {
            "first_aired": "2017-02-17T08:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 13,
                "title": "Episode 13",
                "ids": {
                    "trakt": 2488954,
                    "tvdb": 5957499,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dragons",
                "year": 2012,
                "ids": {
                    "trakt": 44060,
                    "slug": "dragons-2012",
                    "tvdb": 261202,
                    "imdb": "tt2325846",
                    "tmdb": 44305,
                    "tvrage": 31558
                }
            }
        }, {
            "first_aired": "2017-02-17T11:00:00.000Z",
            "episode": {
                "season": 11,
                "number": 25,
                "title": null,
                "ids": {
                    "trakt": 2494138,
                    "tvdb": 5965545,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Good Mythical Morning",
                "year": 2012,
                "ids": {
                    "trakt": 94860,
                    "slug": "good-mythical-morning",
                    "tvdb": 290686,
                    "imdb": "tt4087032",
                    "tmdb": 65701,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T11:00:00.000Z",
            "episode": {
                "season": 0,
                "number": 847,
                "title": "- Good Mythical More",
                "ids": {
                    "trakt": 2495400,
                    "tvdb": 5965552,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Good Mythical Morning",
                "year": 2012,
                "ids": {
                    "trakt": 94860,
                    "slug": "good-mythical-morning",
                    "tvdb": 290686,
                    "imdb": "tt4087032",
                    "tmdb": 65701,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T16:00:00.000Z",
            "episode": {
                "season": 45,
                "number": 102,
                "title": "2017-02-17",
                "ids": {
                    "trakt": 2494609,
                    "tvdb": 5966255,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Price Is Right",
                "year": 1972,
                "ids": {
                    "trakt": 2038,
                    "slug": "the-price-is-right",
                    "tvdb": 77072,
                    "imdb": "tt0068120",
                    "tmdb": 2051,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T16:15:00.000Z",
            "episode": {
                "season": 30,
                "number": 290,
                "title": "Ep. #7527",
                "ids": {
                    "trakt": 2495224,
                    "tvdb": 5967178,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Bold and the Beautiful",
                "year": 1987,
                "ids": {
                    "trakt": 6608,
                    "slug": "the-bold-and-the-beautiful",
                    "tvdb": 79838,
                    "imdb": "tt0092325",
                    "tmdb": 6647,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T17:30:00.000Z",
            "episode": {
                "season": 44,
                "number": 119,
                "title": "Episode 11118 - February 17, 2017",
                "ids": {
                    "trakt": 2495240,
                    "tvdb": 5967172,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Young and the Restless",
                "year": 1973,
                "ids": {
                    "trakt": 1049,
                    "slug": "the-young-and-the-restless",
                    "tvdb": 70328,
                    "imdb": "tt0069658",
                    "tmdb": 1054,
                    "tvrage": 6318
                }
            }
        }, {
            "first_aired": "2017-02-17T18:00:00.000Z",
            "episode": {
                "season": 52,
                "number": 106,
                "title": "Friday Febuary 17, 2017",
                "ids": {
                    "trakt": 2494530,
                    "tvdb": 5966269,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Days of Our Lives",
                "year": 1965,
                "ids": {
                    "trakt": 876,
                    "slug": "days-of-our-lives",
                    "tvdb": 70366,
                    "imdb": "tt0058796",
                    "tmdb": 881,
                    "tvrage": 3256
                }
            }
        }, {
            "first_aired": "2017-02-17T19:00:00.000Z",
            "episode": {
                "season": 54,
                "number": 219,
                "title": "#13749",
                "ids": {
                    "trakt": 2474281,
                    "tvdb": 5933950,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "General Hospital",
                "year": 1963,
                "ids": {
                    "trakt": 982,
                    "slug": "general-hospital",
                    "tvdb": 75332,
                    "imdb": "tt0056758",
                    "tmdb": 987,
                    "tvrage": 3653
                }
            }
        }, {
            "first_aired": "2017-02-17T20:00:00.000Z",
            "episode": {
                "season": 15,
                "number": 103,
                "title": "Multiple Restraining Orders and Fake Births: Brittany Speaks",
                "ids": {
                    "trakt": 2494629,
                    "tvdb": 5966251,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dr. Phil",
                "year": 2002,
                "ids": {
                    "trakt": 4628,
                    "slug": "dr-phil",
                    "tvdb": 71424,
                    "imdb": "tt0329824",
                    "tmdb": 4652,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T21:00:00.000Z",
            "episode": {
                "season": 14,
                "number": 106,
                "title": "Kate Hudson",
                "ids": {
                    "trakt": 2489875,
                    "tvdb": 5958996,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Ellen DeGeneres Show",
                "year": 2003,
                "ids": {
                    "trakt": 561,
                    "slug": "the-ellen-degeneres-show",
                    "tvdb": 72194,
                    "imdb": "tt0379623",
                    "tmdb": 562,
                    "tvrage": 5750
                }
            }
        }, {
            "first_aired": "2017-02-17T22:00:00.000Z",
            "episode": {
                "season": 36,
                "number": 24,
                "title": "Alfa Romeo Giula",
                "ids": {
                    "trakt": 2486653,
                    "tvdb": 5953091,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "MotorWeek",
                "year": 1987,
                "ids": {
                    "trakt": 5440,
                    "slug": "motorweek",
                    "tvdb": 239601,
                    "imdb": "tt0244912",
                    "tmdb": 5467,
                    "tvrage": 8000
                }
            }
        }, {
            "first_aired": "2017-02-17T22:00:00.000Z",
            "episode": {
                "season": 21,
                "number": 140,
                "title": "Off-Road Vehicle Swindle?!; Uninsured and Driving Drunk?!; Wipe That Smile Off Your Face!",
                "ids": {
                    "trakt": 2493601,
                    "tvdb": 5964732,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Judge Judy",
                "year": 1996,
                "ids": {
                    "trakt": 3917,
                    "slug": "judge-judy",
                    "tvdb": 71221,
                    "imdb": "tt0115227",
                    "tmdb": 3940,
                    "tvrage": 7960
                }
            }
        }, {
            "first_aired": "2017-02-17T22:00:00.000Z",
            "episode": {
                "season": 21,
                "number": 141,
                "title": "Botched Wig Order?!; Casual Gambler Demands Payback!",
                "ids": {
                    "trakt": 2493603,
                    "tvdb": 5964735,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Judge Judy",
                "year": 1996,
                "ids": {
                    "trakt": 3917,
                    "slug": "judge-judy",
                    "tvdb": 71221,
                    "imdb": "tt0115227",
                    "tmdb": 3940,
                    "tvrage": 7960
                }
            }
        }, {
            "first_aired": "2017-02-17T22:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 35,
                "title": "Episode 35",
                "ids": {
                    "trakt": 2424434,
                    "tvdb": 5867018,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Pardon the Interruption",
                "year": 2001,
                "ids": {
                    "trakt": 1889,
                    "slug": "pardon-the-interruption",
                    "tvdb": 266681,
                    "imdb": "tt0307800",
                    "tmdb": 1902,
                    "tvrage": 4774
                }
            }
        }, {
            "first_aired": "2017-02-17T23:00:00.000Z",
            "episode": {
                "season": 42,
                "number": 35,
                "title": "February 17, 2017",
                "ids": {
                    "trakt": 2461959,
                    "tvdb": 5918439,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "PBS NewsHour",
                "year": 1983,
                "ids": {
                    "trakt": 1644,
                    "slug": "pbs-newshour",
                    "tvdb": 81388,
                    "imdb": "tt0247880",
                    "tmdb": 1655,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T23:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 48,
                "title": "Feb 17 Fri",
                "ids": {
                    "trakt": 2488923,
                    "tvdb": 5956499,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "NBC Nightly News",
                "year": 1970,
                "ids": {
                    "trakt": 823,
                    "slug": "nbc-nightly-news",
                    "tvdb": 139911,
                    "imdb": "tt0231035",
                    "tmdb": 826,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T23:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 48,
                "title": "Feb 17 Fri",
                "ids": {
                    "trakt": 2490341,
                    "tvdb": 5959196,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "CBS Evening News",
                "year": 1962,
                "ids": {
                    "trakt": 635,
                    "slug": "cbs-evening-news",
                    "tvdb": 74468,
                    "imdb": null,
                    "tmdb": 637,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-17T23:30:00.000Z",
            "episode": {
                "season": 34,
                "number": 115,
                "title": "Episode 115",
                "ids": {
                    "trakt": 2492653,
                    "tvdb": 5963345,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Wheel of Fortune",
                "year": 1983,
                "ids": {
                    "trakt": 2760,
                    "slug": "wheel-of-fortune",
                    "tvdb": 76573,
                    "imdb": "tt0072584",
                    "tmdb": 2778,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-18T00:00:00.000Z",
            "episode": {
                "season": 2017,
                "number": 35,
                "title": "S33 College Championship Quarterfinal Game 5",
                "ids": {
                    "trakt": 2484028,
                    "tvdb": 5948136,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Jeopardy!",
                "year": 1964,
                "ids": {
                    "trakt": 2893,
                    "slug": "jeopardy",
                    "tvdb": 77075,
                    "imdb": "tt0159881",
                    "tmdb": 2912,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-18T00:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 16,
                "title": "Storm in the Room",
                "ids": {
                    "trakt": 2487254,
                    "tvdb": 5954498,
                    "imdb": "tt5969416",
                    "tmdb": 1263494,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Steven Universe",
                "year": 2013,
                "ids": {
                    "trakt": 60686,
                    "slug": "steven-universe",
                    "tvdb": 270701,
                    "imdb": "tt3061046",
                    "tmdb": 61175,
                    "tvrage": 32829
                }
            }
        }, {
            "first_aired": "2017-02-18T00:30:00.000Z",
            "episode": {
                "season": 3,
                "number": 3,
                "title": "Clarence for President",
                "ids": {
                    "trakt": 2430365,
                    "tvdb": 5872832,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Clarence",
                "year": 2014,
                "ids": {
                    "trakt": 73918,
                    "slug": "clarence-2014",
                    "tvdb": 271421,
                    "imdb": "tt3061050",
                    "tmdb": 50035,
                    "tvrage": 37027
                }
            }
        }, {
            "first_aired": "2017-02-18T00:30:00.000Z",
            "episode": {
                "season": 1,
                "number": 83,
                "title": "Episode 83",
                "ids": {
                    "trakt": 2451482,
                    "tvdb": 5902562,
                    "imdb": null,
                    "tmdb": 1251125,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Vice News Tonight",
                "year": 2016,
                "ids": {
                    "trakt": 111550,
                    "slug": "vice-news-tonight",
                    "tvdb": 317479,
                    "imdb": "tt6329790",
                    "tmdb": 67584,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-18T01:00:00.000Z",
            "episode": {
                "season": 8,
                "number": 13,
                "title": "The Lies Are Going to Catch Up With You",
                "ids": {
                    "trakt": 2294587,
                    "tvdb": 5937414,
                    "imdb": "tt5668528",
                    "tmdb": 1260953,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "The Vampire Diaries",
                "year": 2009,
                "ids": {
                    "trakt": 18083,
                    "slug": "the-vampire-diaries",
                    "tvdb": 95491,
                    "imdb": "tt1405406",
                    "tmdb": 18165,
                    "tvrage": 21766
                }
            }
        }, {
            "first_aired": "2017-02-18T01:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 7,
                "title": "Blind Love",
                "ids": {
                    "trakt": 2325465,
                    "tvdb": 5730539,
                    "imdb": "tt5858468",
                    "tmdb": 1253919,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Grimm",
                "year": 2011,
                "ids": {
                    "trakt": 39185,
                    "slug": "grimm",
                    "tvdb": 248736,
                    "imdb": "tt1830617",
                    "tmdb": 39351,
                    "tvrage": 28352
                }
            }
        }, {
            "first_aired": "2017-02-18T01:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 16,
                "title": "Hook",
                "ids": {
                    "trakt": 2407117,
                    "tvdb": 5908399,
                    "imdb": "tt6215154",
                    "tmdb": 1262881,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "MacGyver",
                "year": 2016,
                "ids": {
                    "trakt": 107792,
                    "slug": "macgyver-2016",
                    "tvdb": 311902,
                    "imdb": "tt1399045",
                    "tmdb": 67133,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-18T01:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 16,
                "title": "Benzodiazepine & the Benjamins",
                "ids": {
                    "trakt": 2481025,
                    "tvdb": 5942793,
                    "imdb": null,
                    "tmdb": 1263810,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Rosewood",
                "year": 2015,
                "ids": {
                    "trakt": 99002,
                    "slug": "rosewood",
                    "tvdb": 295683,
                    "imdb": "tt4465472",
                    "tmdb": 63329,
                    "tvrage": 47421
                }
            }
        }, {
            "first_aired": "2017-02-18T01:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 11,
                "title": "Tiny House-A-Rooney",
                "ids": {
                    "trakt": 2482050,
                    "tvdb": 5945065,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Liv and Maddie",
                "year": 2013,
                "ids": {
                    "trakt": 58982,
                    "slug": "liv-and-maddie",
                    "tvdb": 270423,
                    "imdb": "tt2794380",
                    "tmdb": 59375,
                    "tvrage": 36667
                }
            }
        }, {
            "first_aired": "2017-02-18T01:00:00.000Z",
            "episode": {
                "season": 6,
                "number": 17,
                "title": "The Friending Library",
                "ids": {
                    "trakt": 2482115,
                    "tvdb": 5945285,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Last Man Standing",
                "year": 2011,
                "ids": {
                    "trakt": 39132,
                    "slug": "last-man-standing-2011",
                    "tvdb": 248834,
                    "imdb": "tt1828327",
                    "tmdb": 39297,
                    "tvrage": 28386
                }
            }
        }, {
            "first_aired": "2017-02-18T01:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 15,
                "title": "Reunion Part 1",
                "ids": {
                    "trakt": 2494145,
                    "tvdb": 5965577,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Married to Medicine",
                "year": 2013,
                "ids": {
                    "trakt": 46458,
                    "slug": "married-to-medicine",
                    "tvdb": 268079,
                    "imdb": "tt2543378",
                    "tmdb": 46733,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-18T01:00:00.000Z",
            "episode": {
                "season": 9,
                "number": 9,
                "title": "Chanel and Sterling XLIII",
                "ids": {
                    "trakt": 2494868,
                    "tvdb": 5966506,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Ridiculousness",
                "year": 2011,
                "ids": {
                    "trakt": 38497,
                    "slug": "ridiculousness",
                    "tvdb": 250793,
                    "imdb": "tt1820166",
                    "tmdb": 38657,
                    "tvrage": 27731
                }
            }
        }, {
            "first_aired": "2017-02-18T01:00:00.000Z",
            "episode": {
                "season": 9,
                "number": 10,
                "title": "Michael Crossland",
                "ids": {
                    "trakt": 2494869,
                    "tvdb": 5966508,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Ridiculousness",
                "year": 2011,
                "ids": {
                    "trakt": 38497,
                    "slug": "ridiculousness",
                    "tvdb": 250793,
                    "imdb": "tt1820166",
                    "tmdb": 38657,
                    "tvrage": 27731
                }
            }
        }, {
            "first_aired": "2017-02-18T01:28:00.000Z",
            "episode": {
                "season": 2,
                "number": 14,
                "title": "United We Stand",
                "ids": {
                    "trakt": 2471436,
                    "tvdb": 5930594,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Descendants: Wicked World",
                "year": 2015,
                "ids": {
                    "trakt": 101304,
                    "slug": "descendants-wicked-world",
                    "tvdb": 299597,
                    "imdb": "tt4951098",
                    "tmdb": 65016,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-18T01:30:00.000Z",
            "episode": {
                "season": 2,
                "number": 17,
                "title": "Pat's Rash",
                "ids": {
                    "trakt": 2473965,
                    "tvdb": 5933959,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dr. Ken",
                "year": 2015,
                "ids": {
                    "trakt": 98913,
                    "slug": "dr-ken",
                    "tvdb": 295557,
                    "imdb": "tt3216608",
                    "tmdb": 62776,
                    "tvrage": 37966
                }
            }
        }, {
            "first_aired": "2017-02-18T02:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 8,
                "title": "Lions in Winter",
                "ids": {
                    "trakt": 2045637,
                    "tvdb": 5847894,
                    "imdb": "tt4897632",
                    "tmdb": 1262559,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Emerald City",
                "year": 2017,
                "ids": {
                    "trakt": 98233,
                    "slug": "emerald-city",
                    "tvdb": 295779,
                    "imdb": "tt3579018",
                    "tmdb": 62417,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-18T02:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 7,
                "title": "Loco Parentis",
                "ids": {
                    "trakt": 2410148,
                    "tvdb": 5847604,
                    "imdb": "tt6228386",
                    "tmdb": 1263802,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Sleepy Hollow",
                "year": 2013,
                "ids": {
                    "trakt": 50503,
                    "slug": "sleepy-hollow",
                    "tvdb": 269578,
                    "imdb": "tt2647544",
                    "tmdb": 50825,
                    "tvrage": 34726
                }
            }
        }, {
            "first_aired": "2017-02-18T02:00:00.000Z",
            "episode": {
                "season": 4,
                "number": 2,
                "title": "A Grain of Deception",
                "ids": {
                    "trakt": 2416237,
                    "tvdb": 5855991,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Reign",
                "year": 2013,
                "ids": {
                    "trakt": 48561,
                    "slug": "reign",
                    "tvdb": 269602,
                    "imdb": "tt2710394",
                    "tmdb": 48865,
                    "tvrage": 34590
                }
            }
        }, {
            "first_aired": "2017-02-18T02:00:00.000Z",
            "episode": {
                "season": 26,
                "number": 5,
                "title": "Beef, Lamb and Pig",
                "ids": {
                    "trakt": 2441354,
                    "tvdb": 5888499,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Diners, Drive-ins and Dives",
                "year": 2007,
                "ids": {
                    "trakt": 4062,
                    "slug": "diners-drive-ins-and-dives",
                    "tvdb": 82918,
                    "imdb": null,
                    "tmdb": 4086,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-18T02:00:00.000Z",
            "episode": {
                "season": 7,
                "number": 18,
                "title": "Miners vs. Beavers",
                "ids": {
                    "trakt": 2466341,
                    "tvdb": 5927801,
                    "imdb": "tt6495836",
                    "tmdb": 1260999,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Gold Rush",
                "year": 2010,
                "ids": {
                    "trakt": 34485,
                    "slug": "gold-rush",
                    "tvdb": 208111,
                    "imdb": "tt1800864",
                    "tmdb": 34634,
                    "tvrage": 26961
                }
            }
        }, {
            "first_aired": "2017-02-18T02:00:00.000Z",
            "episode": {
                "season": 7,
                "number": 17,
                "title": "Hahai i nā pilikua nui",
                "ids": {
                    "trakt": 2472715,
                    "tvdb": 5960636,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Hawaii Five-0",
                "year": 2010,
                "ids": {
                    "trakt": 32657,
                    "slug": "hawaii-five-0",
                    "tvdb": 164541,
                    "imdb": "tt1600194",
                    "tmdb": 32798,
                    "tvrage": 24840
                }
            }
        }, {
            "first_aired": "2017-02-18T02:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 3,
                "title": "Stuck in the School Photo",
                "ids": {
                    "trakt": 2476678,
                    "tvdb": 5937953,
                    "imdb": null,
                    "tmdb": 1263798,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Stuck in the Middle",
                "year": 2016,
                "ids": {
                    "trakt": 104799,
                    "slug": "stuck-in-the-middle",
                    "tvdb": 306143,
                    "imdb": "tt4488724",
                    "tmdb": 65291,
                    "tvrage": 50696
                }
            }
        }, {
            "first_aired": "2017-02-18T02:00:00.000Z",
            "episode": {
                "season": 8,
                "number": 17,
                "title": "Episode 17",
                "ids": {
                    "trakt": 2479455,
                    "tvdb": 5941188,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Shark Tank",
                "year": 2009,
                "ids": {
                    "trakt": 30569,
                    "slug": "shark-tank",
                    "tvdb": 100981,
                    "imdb": "tt1442550",
                    "tmdb": 30703,
                    "tvrage": 22610
                }
            }
        }, {
            "first_aired": "2017-02-18T02:00:00.000Z",
            "episode": {
                "season": 2017,
                "number": 35,
                "title": "February 17, 2017",
                "ids": {
                    "trakt": 2489845,
                    "tvdb": 5958956,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Rachel Maddow Show",
                "year": 2008,
                "ids": {
                    "trakt": 7921,
                    "slug": "the-rachel-maddow-show",
                    "tvdb": 181561,
                    "imdb": "tt1280627",
                    "tmdb": 7967,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-18T02:00:00.000Z",
            "episode": {
                "season": 25,
                "number": 18,
                "title": "February 17",
                "ids": {
                    "trakt": 2494457,
                    "tvdb": 5965965,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Dateline NBC",
                "year": 1992,
                "ids": {
                    "trakt": 77,
                    "slug": "dateline-nbc",
                    "tvdb": 70600,
                    "imdb": "tt0103396",
                    "tmdb": 78,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-18T03:00:00.000Z",
            "episode": {
                "season": 15,
                "number": 5,
                "title": "Episode 415",
                "ids": {
                    "trakt": 2455750,
                    "tvdb": 5908035,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Real Time with Bill Maher",
                "year": 2003,
                "ids": {
                    "trakt": 4395,
                    "slug": "real-time-with-bill-maher",
                    "tvdb": 72231,
                    "imdb": "tt0350448",
                    "tmdb": 4419,
                    "tvrage": 4950
                }
            }
        }, {
            "first_aired": "2017-02-18T03:00:00.000Z",
            "episode": {
                "season": 124,
                "number": 13,
                "title": "Style Battle in St. Petersburg, Florida",
                "ids": {
                    "trakt": 2461890,
                    "tvdb": 5917420,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "House Hunters",
                "year": 1999,
                "ids": {
                    "trakt": 6441,
                    "slug": "house-hunters",
                    "tvdb": 73182,
                    "imdb": "tt0369117",
                    "tmdb": 6480,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-18T03:00:00.000Z",
            "episode": {
                "season": 7,
                "number": 16,
                "title": "Hard Bargain",
                "ids": {
                    "trakt": 2491220,
                    "tvdb": 5961997,
                    "imdb": null,
                    "tmdb": 1267188,
                    "tvrage": 0
                }
            },
            "show": {
                "title": "Blue Bloods",
                "year": 2010,
                "ids": {
                    "trakt": 32551,
                    "slug": "blue-bloods",
                    "tvdb": 164981,
                    "imdb": "tt1595859",
                    "tmdb": 32692,
                    "tvrage": 25756
                }
            }
        }, {
            "first_aired": "2017-02-18T03:00:00.000Z",
            "episode": {
                "season": 40,
                "number": 27,
                "title": "February 17",
                "ids": {
                    "trakt": 2494403,
                    "tvdb": 5965959,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "20/20",
                "year": 1978,
                "ids": {
                    "trakt": 2022,
                    "slug": "20-20",
                    "tvdb": 72289,
                    "imdb": "tt0124932",
                    "tmdb": 2035,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-18T03:30:00.000Z",
            "episode": {
                "season": 103,
                "number": 8,
                "title": "American Dreams in Cuenca",
                "ids": {
                    "trakt": 2479583,
                    "tvdb": 5941346,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "House Hunters International",
                "year": 2006,
                "ids": {
                    "trakt": 29047,
                    "slug": "house-hunters-international",
                    "tvdb": 183411,
                    "imdb": "tt0795129",
                    "tmdb": 29173,
                    "tvrage": 16886
                }
            }
        }, {
            "first_aired": "2017-02-18T03:30:00.000Z",
            "episode": {
                "season": 103,
                "number": 13,
                "title": "All In for Alicante",
                "ids": {
                    "trakt": 2479587,
                    "tvdb": 5941377,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "House Hunters International",
                "year": 2006,
                "ids": {
                    "trakt": 29047,
                    "slug": "house-hunters-international",
                    "tvdb": 183411,
                    "imdb": "tt0795129",
                    "tmdb": 29173,
                    "tvrage": 16886
                }
            }
        }, {
            "first_aired": "2017-02-18T04:35:00.000Z",
            "episode": {
                "season": 2,
                "number": 98,
                "title": "Julie Andrews, Christina Hendricks",
                "ids": {
                    "trakt": 2492966,
                    "tvdb": 5963949,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Late Show with Stephen Colbert",
                "year": 2015,
                "ids": {
                    "trakt": 93737,
                    "slug": "the-late-show-with-stephen-colbert",
                    "tvdb": 289574,
                    "imdb": "tt3697842",
                    "tmdb": 63770,
                    "tvrage": 41941
                }
            }
        }, {
            "first_aired": "2017-02-18T11:00:00.000Z",
            "episode": {
                "season": 0,
                "number": 848,
                "title": "- Good Mythical Crew Ep 48",
                "ids": {
                    "trakt": 2495401,
                    "tvdb": 5965553,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Good Mythical Morning",
                "year": 2012,
                "ids": {
                    "trakt": 94860,
                    "slug": "good-mythical-morning",
                    "tvdb": 290686,
                    "imdb": "tt4087032",
                    "tmdb": 65701,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-18T12:00:00.000Z",
            "episode": {
                "season": 47,
                "number": 7,
                "title": "Dress Up",
                "ids": {
                    "trakt": 2473512,
                    "tvdb": 5933220,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Sesame Street",
                "year": 1969,
                "ids": {
                    "trakt": 501,
                    "slug": "sesame-street",
                    "tvdb": 78419,
                    "imdb": "tt0063951",
                    "tmdb": 502,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-18T12:00:00.000Z",
            "episode": {
                "season": 2,
                "number": 15,
                "title": "Og Man Out",
                "ids": {
                    "trakt": 2495260,
                    "tvdb": 5967245,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Sonic Boom",
                "year": 2014,
                "ids": {
                    "trakt": 80121,
                    "slug": "sonic-boom",
                    "tvdb": 280103,
                    "imdb": "tt3232262",
                    "tmdb": 62211,
                    "tvrage": 46124
                }
            }
        }, {
            "first_aired": "2017-02-18T15:00:00.000Z",
            "episode": {
                "season": 1,
                "number": 9,
                "title": "Time Share",
                "ids": {
                    "trakt": 2436669,
                    "tvdb": 5875071,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Justice League Action",
                "year": 2016,
                "ids": {
                    "trakt": 108237,
                    "slug": "justice-league-action",
                    "tvdb": 312818,
                    "imdb": "tt5419200",
                    "tmdb": 68837,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-18T16:00:00.000Z",
            "episode": {
                "season": 12,
                "number": 7,
                "title": "Game Night",
                "ids": {
                    "trakt": 2488839,
                    "tvdb": 5956879,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "The Kitchen",
                "year": 2014,
                "ids": {
                    "trakt": 76226,
                    "slug": "the-kitchen",
                    "tvdb": 278664,
                    "imdb": "tt3475084",
                    "tmdb": 62128,
                    "tvrage": 39544
                }
            }
        }, {
            "first_aired": "2017-02-18T20:00:00.000Z",
            "episode": {
                "season": 14,
                "number": 21,
                "title": "Hawai'i - Mom & Dad",
                "ids": {
                    "trakt": 2445069,
                    "tvdb": 5894005,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "Simply Ming",
                "year": 2003,
                "ids": {
                    "trakt": 8650,
                    "slug": "simply-ming",
                    "tvdb": 87671,
                    "imdb": null,
                    "tmdb": 8696,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-18T23:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 49,
                "title": "Feb 18 Sat",
                "ids": {
                    "trakt": 2488924,
                    "tvdb": 5956507,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "NBC Nightly News",
                "year": 1970,
                "ids": {
                    "trakt": 823,
                    "slug": "nbc-nightly-news",
                    "tvdb": 139911,
                    "imdb": "tt0231035",
                    "tmdb": 826,
                    "tvrage": null
                }
            }
        }, {
            "first_aired": "2017-02-18T23:30:00.000Z",
            "episode": {
                "season": 2017,
                "number": 49,
                "title": "Feb 18 Sat",
                "ids": {
                    "trakt": 2490342,
                    "tvdb": 5959197,
                    "imdb": null,
                    "tmdb": null,
                    "tvrage": null
                }
            },
            "show": {
                "title": "CBS Evening News",
                "year": 1962,
                "ids": {
                    "trakt": 635,
                    "slug": "cbs-evening-news",
                    "tvdb": 74468,
                    "imdb": null,
                    "tmdb": 637,
                    "tvrage": null
                }
            }
        }]

        return service;
    }
]);