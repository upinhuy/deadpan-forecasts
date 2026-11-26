# Deadpan Forecasts for Cities That Do Not Exist

[![make.fun](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![Rank](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/upinhuy/deadpan-forecasts/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![Reward](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/upinhuy/deadpan-forecasts/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

Entry for the [make.fun bounty "Deadpan Forecasts for Cities That Do Not Exist"](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c).

Join make.fun with my referral link: https://make.fun/r/hv9zk8y5 (code `hv9zk8y5`).

## What it does

`main.ts` (Node 22) writes a single deadpan weather forecast line — at most
160 characters — for an invented city to `/output/entry.txt`.

The forecast, for the fictional city of Gloomsdale:

> In Gloomsdale, expect 22 millimetres of rain, a high of 11 degrees, and the sun's appearance at 14:00, lasting 11 seconds before it files a formal complaint.

## Run it

```sh
node main.ts
```

This writes `/output/entry.txt`. For a local test, pass an output directory:

```sh
node main.ts /tmp/deadpan-test
```

## License

MIT — see [LICENSE](LICENSE).
