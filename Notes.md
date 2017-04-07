##How do you set a class inline?

    src/App.html

```
{{#if page === 'about'}}
    <a href="#" class="selected" on:click='about()'>About</a>
{{else}}
    <a href="#" on:click='about()'>About</a>
{{/if}}
```

##Why do I have to duplicate the Details and Graph components to force them to render? Shouldn't updating the `graphcategory` and `details` data trigger this?

    src/App.html

```
{{#if page === 'about'}}
    <Details content={{aboutdetails}} />
{{elseif page === 'themes'}}
    <Details content={{details}} />
    <Graph data={{graphdata}} primarytype='work' categorytype={{graphcategory}} on:nodeselected='nodeSelected(event)' />
{{else}}
    <Details content={{details}} />
    <Graph data={{graphdata}} primarytype='work' categorytype={{graphcategory}} on:nodeselected='nodeSelected(event)' />
{{/if}}

```

##How do you do nested #if statements?

    /src/components/Details.html

I'm currently duplicating the img tag:

```
{{#if content.image && content.link}}
    <a href="{{content.link}}">
        <img src="/images/{{content.image}}" />
    </a>
{{elseif content.image}}
    <img src="/images/{{content.image}}" />
{{/if}}
```

The following nested if statements gives you this compiler error:

```
(svelte plugin) (9:58) Unexpected block closing tag
 7:     {{/if}}
```

```
{{#if content.image}}
    {{#if content.link}}<a href="{{content.link}}">{{/if}}
    <img src="/images/{{content.image}}" />
    {{#if content.link}}</a>{{/if}}
{{/if}}
```