## Read More(toogle text) directive for angular2

<h4>This is a simple toogle text directive for angular2</h4>

At first step you need mark your text-div
<code>
	<p #textContent id="read-more">  
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident reiciendis voluptatem nesciunt, quisquam dolor sit incidunt eaque possimus mollitia.
	</p>

	 <p class="read-more-link">
		 <a readMore [readMore-length]="430" [readMore-element]="textContent">
		 	<span class="less">Less <i class="fa fa-angle-right" aria-hidden="true"></i></span>
		 	<span class="more">More <i class="fa fa-angle-right" aria-hidden="true"></i></span>
		 </a>
	 </p>
</code>
<img src="assets/1.png" alt=""><br>
Then create your button event element
<img src="assets/2.png" alt="">

1. Add attribute "read more"
2. Set length of text that we need show by default
3. Set element that we need cut
4. Here is your buttons less and more u can inset whetewer but there are must be 2 elements with classes ".more" and ".less"

Here you can see example https://github.com/Oneia/read-more-angular2/blob/master/example/src/app/app.component.html#L4
