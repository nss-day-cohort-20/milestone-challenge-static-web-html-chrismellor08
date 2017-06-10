function makeBlog (title, postDate, text) {
	var blogEntry = {};

	blogEntry.title = title;
	blogEntry.postDate = postDate;
	blogEntry.text = text;

	return blogEntry;
}

var blogEntry1 =makeBlog("Weeks One and Two", "June 1, 2017", "I can't believe I've already (and only) been at NSS for 2 weeks. I first opened this blog to see what I did on my first day and laughed out loud. It's amazing to see how much I've learned in only two short weeks. It's also fascinating, because when you try to analyze what you've learned, and are learning, on a day-to-day basis there is simply no way to realize everything your brain is digesting. We started our first group prokect and it was very challenging. Git and GitHub was something that I was not expecting to be so difficult. I did most of the CSS work and it still looked like crap, but I learned a lot. I am thankful that we got to work on the exact same project again.I worked SO much better with my new team. The javascript began to make real sense (especially because we wrote the code the way I wantd to this time) and I was able to do SO much more with the CSS. Communication between us was stellar. We set really high goals for ourselves and everyone worked extra outside of class to acheive what we wanted to accomplish. Our groups project was the best and it wasn't even close. Before we did this project I looked at the 'Boy Bands' exercise and couldn't even comprehend what it was asking me to do. After building a product page for the second time and having ownership and input in the JS action, I was able to complete the exercise in a matter of minutes. 14 days ago I would have been completely clueless. 4 days ago I was ALMOST clueless. I feel extremely confident that this school is going to help me do the things I came here to do. I believe in the style of learning. I believe in the instructors. I believe in myself. It's friday night and I'm already excited to go back monday morning. I felt the same way last friday night. I fully expect my knowledge of javascript to double by this time next week and that is freaking exciting. It feels good to be excited about something I can get paid to do.");
var blogEntry2 =makeBlog("Week Three", "June 09, 2017", "This was my third week at NSS. I can’t believe another week has already come and gone. And, more importantly, I can’t believe how much more I know this week than I knew last week. I continue to feel the same way about how things go in the day-to-day. It’s impossible to realize how much your brain is absorbing. I am starting to see myself approaching problems differently. I think I am starting to see flashes of what it’s like to think like a developer. There has been a slight mentality shift, in that, I am beginning to view problems in a much more linear process. My knowledge of Javascript has obviously increased. For loops are coming very naturally and functions are really beginning to click. I am still a little unclear on how and when you’re supposed to pass arguments into functions, but I think I’m ALMOST there. Also, I am much more comfortable and confident with Git and GitHub. Last night, I’m not sure what happened, but my “origin” got “unlinked” from my remote branch. I don’t know how or why this happened, but I was able to fix it with a relatively painless effort. Which leads me to another thing I am greatly improving on - Googling! I think I might have improved most in this area. I have become very good at knowing exactly what to google and exactly where to look for answers. I used to go to Stack Overflow and wade through a dozen answers before finding one that was close enough to matching the syntax and context of my problem that I’d be bale to extract something out of it. Now, however, I can generally look at the first google result and apply the basic context of what I’m seeing to the problem I’m trying to solve. This has honestly probably been the most important development, in regard to the skills Ive gained. I would also like to make note of the relationships that are beginning to form between my fellow classmates and me. I am really beginning to appreciate the differences between the people around me. It’s really interesting to see the different things that different people are latching on to and accelerating at. It’s also very encouraging and beneficial to see that the people around me are willing and excited to share and help me and anyone else around them. I have said this multiple times, but I think it’s something that needs to be said as often as possible—Every day since I have started at NSS has been the best day of my life.Where I came from was so suffocating and oppressive. Every day since has been filled with hope and encouragement. I love to learn. I love to push myself. I love the environment at NSS. If there was an optional class tomorrow (Saturday) morning, I would be there in a heartbeat.");

var blogEntries= [blogEntry1, blogEntry2]

for (var i=0; i<blogEntries.length; i++) {

document.getElementById("blogContainer").innerHTML +=
		`
			<div class="blogCard">
				<div class="row">
					<div class="panel">
						<div class="panel-heading">
							<h3 class="panel-title">${blogEntries[i].title}<br>${blogEntries[i].postDate}</h3>
							<span class="pull-right">
							</span>
						</div>
						<div class="panel-body">
							<div class="tab-content">
								<div class="tab-pane active" id="test"><article>
								${blogEntries[i].text}
								</article>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		`

}









