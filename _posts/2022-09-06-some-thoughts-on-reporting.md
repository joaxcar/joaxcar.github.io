---
title: "File and forget? - why you should revisit old report"
date: 2022-09-06
layout: post
---

I have seen quite a few posts on Twitter stating the same advice for bug bounty hunters: "File and forget". I do realize that what is sugested here targets the drive to sit and refresh ones email inbox for that `triaged` message. But I wanted to spend a minute to address how this advice can be contaproductive for us who are not fully developed hackers.

First of there is a incentiment in bug bounty to report early. Even if you want to be a great reporter with a slick and thourogh report, the "reward only first reporters" rule can easely stab you in the back if you spend to much time on that initial report. On the contrary, my experience is that when I first send my initial report I usually have at least a week before anyone will take a look at it. Thats plenty of time to brush up on any inconcistencies in a follow up comment. While still sitting on the "firts reporter" position. Beware that this entails that the initial report is actually valid. Make sure to confirm the bug, but dont nessecarely spend all the research time diggin in deeper.

A side effect of this "report early" approach is that you also get the `duplicate` flag well before spending all the extra time really nit picking the issue.

Seccondly (and this is the important part) I do this to learn about cyber security, which mean I for the most part do not report issues that I understand to the full extent. After finding an issue I do some initial assesment of the impact and when confirmed I report it. Now this is where the fun begins, escalation! I have reported multiple bugs that I did not managa to take to their full potential before a week/month after initial report. As programs usually take about a month to reply, I use this time to learn about the vulnerability and research any potential escalations.

This approach, with incremental reports, does add a lot of extra work on the part of triagers and responders. But as long as the "first reporter" rule is aplied I see no other way around it. I also think that this aproach speak to the initial idea of bug bounty programs, where an issue can be reported and then discussed and evaluaded between the two peers , the reporter and the remidiator. I see a lot of profecionalism in the bounty space, which has its place but should not be the only valid aproach.

As for a #bugbountytip I would sugest newcommers to this field to take a different approach than "file and forget" namely "file and escalate". If you want prof of concepts of this approach see these disclosed reports

https://hackerone.com/reports/1481207

https://hackerone.com/reports/1409788

Again, note that I do not recomend submitting porly written or incoherant reports. Just that you dont have to know the full impact before reporting.

A final note. I think that bug bounties are a fun and awarding way to learn about cyber security, and I think that the real fun begins after finding that initial bug. Reporting a XSS injection point without spending the extra time to develop a PoC with acctual impact will a lot of the times leve you with the same bounty, but a great learning experience is missed. So with that said, yes the "file and forget" is a great tip for keeping you sane if the alternative is refreshing your inbox, it is also probably a valid tip for professional bounty hunters, but for beginners stopping at initial report and not revisiting the issue can leave you missing both some great learning experience and also some big bounties.
