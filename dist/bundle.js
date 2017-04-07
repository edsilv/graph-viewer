(function () {
'use strict';

function appendNode ( node, target ) {
	target.appendChild( node );
}

function insertNode ( node, target, anchor ) {
	target.insertBefore( node, anchor );
}

function detachNode ( node ) {
	node.parentNode.removeChild( node );
}

function detachBetween ( before, after ) {
	while ( before.nextSibling && before.nextSibling !== after ) {
		before.parentNode.removeChild( before.nextSibling );
	}
}

function teardownEach ( iterations, detach, start ) {
	for ( var i = ( start || 0 ); i < iterations.length; i += 1 ) {
		iterations[i].teardown( detach );
	}
}

function createElement ( name ) {
	return document.createElement( name );
}

function createText ( data ) {
	return document.createTextNode( data );
}

function createComment () {
	return document.createComment( '' );
}

function addEventListener ( node, event, handler ) {
	node.addEventListener ( event, handler, false );
}

function removeEventListener ( node, event, handler ) {
	node.removeEventListener ( event, handler, false );
}

function setAttribute ( node, attribute, value ) {
	node.setAttribute ( attribute, value );
}

function get ( key ) {
	return key ? this._state[ key ] : this._state;
}

function fire ( eventName, data ) {
	var handlers = eventName in this._handlers && this._handlers[ eventName ].slice();
	if ( !handlers ) return;

	for ( var i = 0; i < handlers.length; i += 1 ) {
		handlers[i].call( this, data );
	}
}

function observe ( key, callback, options ) {
	var group = ( options && options.defer ) ? this._observers.pre : this._observers.post;

	( group[ key ] || ( group[ key ] = [] ) ).push( callback );

	if ( !options || options.init !== false ) {
		callback.__calling = true;
		callback.call( this, this._state[ key ] );
		callback.__calling = false;
	}

	return {
		cancel: function () {
			var index = group[ key ].indexOf( callback );
			if ( ~index ) group[ key ].splice( index, 1 );
		}
	};
}

function on ( eventName, handler ) {
	var handlers = this._handlers[ eventName ] || ( this._handlers[ eventName ] = [] );
	handlers.push( handler );

	return {
		cancel: function () {
			var index = handlers.indexOf( handler );
			if ( ~index ) handlers.splice( index, 1 );
		}
	};
}

function set ( newState ) {
	this._set( newState );
	( this._root || this )._flush();
}

function _flush () {
	if ( !this._renderHooks ) return;

	while ( this._renderHooks.length ) {
		var hook = this._renderHooks.pop();
		hook.fn.call( hook.context );
	}
}

function noop () {}

function dispatchObservers ( component, group, newState, oldState ) {
	for ( var key in group ) {
		if ( !( key in newState ) ) continue;

		var newValue = newState[ key ];
		var oldValue = oldState[ key ];

		if ( newValue === oldValue && typeof newValue !== 'object' ) continue;

		var callbacks = group[ key ];
		if ( !callbacks ) continue;

		for ( var i = 0; i < callbacks.length; i += 1 ) {
			var callback = callbacks[i];
			if ( callback.__calling ) continue;

			callback.__calling = true;
			callback.call( component, newValue, oldValue );
			callback.__calling = false;
		}
	}
}

function renderMainFragment$1 ( root, component ) {
	var div = createElement( 'div' );
	div.id = "details";
	
	var ifBlock_anchor = createComment();
	appendNode( ifBlock_anchor, div );
	
	function getBlock ( root ) {
		if ( root.content.title ) return renderIfBlock_0$1;
		return null;
	}
	
	var currentBlock = getBlock( root );
	var ifBlock = currentBlock && currentBlock( root, component );
	
	if ( ifBlock ) ifBlock.mount( ifBlock_anchor.parentNode, ifBlock_anchor );
	appendNode( createText( "\n    " ), div );
	var ifBlock1_anchor = createComment();
	appendNode( ifBlock1_anchor, div );
	
	function getBlock1 ( root ) {
		if ( root.content.image && root.content.link ) return renderIfBlock1_0$1;
		if ( root.content.image ) return renderIfBlock1_1$1;
		return null;
	}
	
	var currentBlock1 = getBlock1( root );
	var ifBlock1 = currentBlock1 && currentBlock1( root, component );
	
	if ( ifBlock1 ) ifBlock1.mount( ifBlock1_anchor.parentNode, ifBlock1_anchor );
	appendNode( createText( "\n    " ), div );
	var ifBlock2_anchor = createComment();
	appendNode( ifBlock2_anchor, div );
	
	function getBlock2 ( root ) {
		if ( root.content.vimeo ) return renderIfBlock2_0$1;
		return null;
	}
	
	var currentBlock2 = getBlock2( root );
	var ifBlock2 = currentBlock2 && currentBlock2( root, component );
	
	if ( ifBlock2 ) ifBlock2.mount( ifBlock2_anchor.parentNode, ifBlock2_anchor );
	appendNode( createText( "\n    " ), div );
	var ifBlock3_anchor = createComment();
	appendNode( ifBlock3_anchor, div );
	
	function getBlock3 ( root ) {
		if ( root.content.text ) return renderIfBlock3_0$1;
		return null;
	}
	
	var currentBlock3 = getBlock3( root );
	var ifBlock3 = currentBlock3 && currentBlock3( root, component );
	
	if ( ifBlock3 ) ifBlock3.mount( ifBlock3_anchor.parentNode, ifBlock3_anchor );
	appendNode( createText( "\n    " ), div );
	var ifBlock4_anchor = createComment();
	appendNode( ifBlock4_anchor, div );
	
	function getBlock4 ( root ) {
		if ( root.content.link ) return renderIfBlock4_0;
		return null;
	}
	
	var currentBlock4 = getBlock4( root );
	var ifBlock4 = currentBlock4 && currentBlock4( root, component );
	
	if ( ifBlock4 ) ifBlock4.mount( ifBlock4_anchor.parentNode, ifBlock4_anchor );
	appendNode( createText( "\n    " ), div );
	
	var div1 = createElement( 'div' );
	div1.className = "types";
	
	appendNode( div1, div );
	var ifBlock5_anchor = createComment();
	appendNode( ifBlock5_anchor, div1 );
	
	function getBlock5 ( root ) {
		if ( root.content.theme ) return renderIfBlock5_0;
		return null;
	}
	
	var currentBlock5 = getBlock5( root );
	var ifBlock5 = currentBlock5 && currentBlock5( root, component );
	
	if ( ifBlock5 ) ifBlock5.mount( ifBlock5_anchor.parentNode, ifBlock5_anchor );
	appendNode( createText( "\n        " ), div1 );
	var ifBlock6_anchor = createComment();
	appendNode( ifBlock6_anchor, div1 );
	
	function getBlock6 ( root ) {
		if ( root.content.form ) return renderIfBlock6_0;
		return null;
	}
	
	var currentBlock6 = getBlock6( root );
	var ifBlock6 = currentBlock6 && currentBlock6( root, component );
	
	if ( ifBlock6 ) ifBlock6.mount( ifBlock6_anchor.parentNode, ifBlock6_anchor );

	return {
		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
		},
		
		update: function ( changed, root ) {
			var _currentBlock = currentBlock;
			currentBlock = getBlock( root );
			if ( _currentBlock === currentBlock && ifBlock) {
				ifBlock.update( changed, root );
			} else {
				if ( ifBlock ) ifBlock.teardown( true );
				ifBlock = currentBlock && currentBlock( root, component );
				if ( ifBlock ) ifBlock.mount( ifBlock_anchor.parentNode, ifBlock_anchor );
			}
			
			var _currentBlock1 = currentBlock1;
			currentBlock1 = getBlock1( root );
			if ( _currentBlock1 === currentBlock1 && ifBlock1) {
				ifBlock1.update( changed, root );
			} else {
				if ( ifBlock1 ) ifBlock1.teardown( true );
				ifBlock1 = currentBlock1 && currentBlock1( root, component );
				if ( ifBlock1 ) ifBlock1.mount( ifBlock1_anchor.parentNode, ifBlock1_anchor );
			}
			
			var _currentBlock2 = currentBlock2;
			currentBlock2 = getBlock2( root );
			if ( _currentBlock2 === currentBlock2 && ifBlock2) {
				ifBlock2.update( changed, root );
			} else {
				if ( ifBlock2 ) ifBlock2.teardown( true );
				ifBlock2 = currentBlock2 && currentBlock2( root, component );
				if ( ifBlock2 ) ifBlock2.mount( ifBlock2_anchor.parentNode, ifBlock2_anchor );
			}
			
			var _currentBlock3 = currentBlock3;
			currentBlock3 = getBlock3( root );
			if ( _currentBlock3 === currentBlock3 && ifBlock3) {
				ifBlock3.update( changed, root );
			} else {
				if ( ifBlock3 ) ifBlock3.teardown( true );
				ifBlock3 = currentBlock3 && currentBlock3( root, component );
				if ( ifBlock3 ) ifBlock3.mount( ifBlock3_anchor.parentNode, ifBlock3_anchor );
			}
			
			var _currentBlock4 = currentBlock4;
			currentBlock4 = getBlock4( root );
			if ( _currentBlock4 === currentBlock4 && ifBlock4) {
				ifBlock4.update( changed, root );
			} else {
				if ( ifBlock4 ) ifBlock4.teardown( true );
				ifBlock4 = currentBlock4 && currentBlock4( root, component );
				if ( ifBlock4 ) ifBlock4.mount( ifBlock4_anchor.parentNode, ifBlock4_anchor );
			}
			
			var _currentBlock5 = currentBlock5;
			currentBlock5 = getBlock5( root );
			if ( _currentBlock5 === currentBlock5 && ifBlock5) {
				ifBlock5.update( changed, root );
			} else {
				if ( ifBlock5 ) ifBlock5.teardown( true );
				ifBlock5 = currentBlock5 && currentBlock5( root, component );
				if ( ifBlock5 ) ifBlock5.mount( ifBlock5_anchor.parentNode, ifBlock5_anchor );
			}
			
			var _currentBlock6 = currentBlock6;
			currentBlock6 = getBlock6( root );
			if ( _currentBlock6 === currentBlock6 && ifBlock6) {
				ifBlock6.update( changed, root );
			} else {
				if ( ifBlock6 ) ifBlock6.teardown( true );
				ifBlock6 = currentBlock6 && currentBlock6( root, component );
				if ( ifBlock6 ) ifBlock6.mount( ifBlock6_anchor.parentNode, ifBlock6_anchor );
			}
		},
		
		teardown: function ( detach ) {
			if ( ifBlock ) ifBlock.teardown( false );
			if ( ifBlock1 ) ifBlock1.teardown( false );
			if ( ifBlock2 ) ifBlock2.teardown( false );
			if ( ifBlock3 ) ifBlock3.teardown( false );
			if ( ifBlock4 ) ifBlock4.teardown( false );
			if ( ifBlock5 ) ifBlock5.teardown( false );
			if ( ifBlock6 ) ifBlock6.teardown( false );
			
			if ( detach ) {
				detachNode( div );
			}
		}
	};
}

function renderIfBlock6_0 ( root, component ) {
	var div = createElement( 'div' );
	div.className = "type";
	
	var h3 = createElement( 'h3' );
	
	appendNode( h3, div );
	appendNode( createText( "Form" ), h3 );
	appendNode( createText( "\n                " ), div );
	var text2 = createText( root.content.form );
	appendNode( text2, div );

	return {
		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
		},
		
		update: function ( changed, root ) {
			text2.data = root.content.form;
		},
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( div );
			}
		}
	};
}

function renderIfBlock5_0 ( root, component ) {
	var div = createElement( 'div' );
	div.className = "type";
	
	var h3 = createElement( 'h3' );
	
	appendNode( h3, div );
	appendNode( createText( "Themes" ), h3 );
	appendNode( createText( "\n                " ), div );
	
	var ul = createElement( 'ul' );
	
	appendNode( ul, div );
	var eachBlock_anchor = createComment();
	appendNode( eachBlock_anchor, ul );
	var eachBlock_value = root.content.theme;
	var eachBlock_iterations = [];
	
	for ( var i = 0; i < eachBlock_value.length; i += 1 ) {
		eachBlock_iterations[i] = renderEachBlock( root, eachBlock_value, eachBlock_value[i], i, component );
		eachBlock_iterations[i].mount( eachBlock_anchor.parentNode, eachBlock_anchor );
	}

	return {
		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
		},
		
		update: function ( changed, root ) {
			var eachBlock_value = root.content.theme;
			
			for ( var i = 0; i < eachBlock_value.length; i += 1 ) {
				if ( !eachBlock_iterations[i] ) {
					eachBlock_iterations[i] = renderEachBlock( root, eachBlock_value, eachBlock_value[i], i, component );
					eachBlock_iterations[i].mount( eachBlock_anchor.parentNode, eachBlock_anchor );
				} else {
					eachBlock_iterations[i].update( changed, root, eachBlock_value, eachBlock_value[i], i );
				}
			}
			
			teardownEach( eachBlock_iterations, true, eachBlock_value.length );
			
			eachBlock_iterations.length = eachBlock_value.length;
		},
		
		teardown: function ( detach ) {
			teardownEach( eachBlock_iterations, false );
			
			if ( detach ) {
				detachNode( div );
			}
		}
	};
}

function renderEachBlock ( root, eachBlock_value, theme, theme__index, component ) {
	var li = createElement( 'li' );
	
	var text = createText( theme );
	appendNode( text, li );

	return {
		mount: function ( target, anchor ) {
			insertNode( li, target, anchor );
		},
		
		update: function ( changed, root, eachBlock_value, theme, theme__index ) {
			text.data = theme;
		},
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( li );
			}
		}
	};
}

function renderIfBlock4_0 ( root, component ) {
	var a = createElement( 'a' );
	a.href = root.content.link;
	a.className = "readmore";
	
	appendNode( createText( "Read more" ), a );

	return {
		mount: function ( target, anchor ) {
			insertNode( a, target, anchor );
		},
		
		update: function ( changed, root ) {
			a.href = root.content.link;
		},
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( a );
			}
		}
	};
}

function renderIfBlock3_0$1 ( root, component ) {
	var p = createElement( 'p' );
	
	var raw_before = createElement( 'noscript' );
	appendNode( raw_before, p );
	var raw_after = createElement( 'noscript' );
	appendNode( raw_after, p );
	raw_before.insertAdjacentHTML( 'afterend', root.content.text );

	return {
		mount: function ( target, anchor ) {
			insertNode( p, target, anchor );
		},
		
		update: function ( changed, root ) {
			detachBetween( raw_before, raw_after );
			
			raw_before.insertAdjacentHTML( 'afterend', root.content.text );
		},
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachBetween( raw_before, raw_after );
				
				detachNode( p );
			}
		}
	};
}

function renderIfBlock2_0$1 ( root, component ) {
	var div = createElement( 'div' );
	div.className = "image-or-video";
	
	var iframe = createElement( 'iframe' );
	iframe.src = "https://player.vimeo.com/video/" + ( root.content.vimeo ) + "?title=0&byline=0&portrait=0";
	iframe.width = "400";
	iframe.height = "225";
	setAttribute( iframe, 'frameborder', "0" );
	setAttribute( iframe, 'webkitallowfullscreen', true );
	setAttribute( iframe, 'mozallowfullscreen', true );
	iframe.allowFullscreen = true;
	
	appendNode( iframe, div );

	return {
		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
		},
		
		update: function ( changed, root ) {
			iframe.src = "https://player.vimeo.com/video/" + ( root.content.vimeo ) + "?title=0&byline=0&portrait=0";
		},
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( div );
			}
		}
	};
}

function renderIfBlock1_1$1 ( root, component ) {
	var div = createElement( 'div' );
	div.className = "image-or-video";
	
	var img = createElement( 'img' );
	img.src = "images/" + ( root.content.image );
	
	appendNode( img, div );

	return {
		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
		},
		
		update: function ( changed, root ) {
			img.src = "images/" + ( root.content.image );
		},
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( div );
			}
		}
	};
}

function renderIfBlock1_0$1 ( root, component ) {
	var div = createElement( 'div' );
	div.className = "image-or-video";
	
	var a = createElement( 'a' );
	a.href = root.content.link;
	
	appendNode( a, div );
	
	var img = createElement( 'img' );
	img.src = "images/" + ( root.content.image );
	
	appendNode( img, a );

	return {
		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
		},
		
		update: function ( changed, root ) {
			a.href = root.content.link;
			
			img.src = "images/" + ( root.content.image );
		},
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( div );
			}
		}
	};
}

function renderIfBlock_0$1 ( root, component ) {
	var h2 = createElement( 'h2' );
	
	var text = createText( root.content.title );
	appendNode( text, h2 );

	return {
		mount: function ( target, anchor ) {
			insertNode( h2, target, anchor );
		},
		
		update: function ( changed, root ) {
			text.data = root.content.title;
		},
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( h2 );
			}
		}
	};
}

function Details ( options ) {
	options = options || {};
	
	this._state = options.data || {};

	this._observers = {
		pre: Object.create( null ),
		post: Object.create( null )
	};

	this._handlers = Object.create( null );

	this._root = options._root;
	this._yield = options._yield;

	this._fragment = renderMainFragment$1( this._state, this );
	if ( options.target ) this._fragment.mount( options.target, null );
}

Details.prototype.get = get;
Details.prototype.fire = fire;
Details.prototype.observe = observe;
Details.prototype.on = on;
Details.prototype.set = set;
Details.prototype._flush = _flush;

Details.prototype._set = function _set ( newState ) {
	var oldState = this._state;
	this._state = Object.assign( {}, oldState, newState );
	
	dispatchObservers( this, this._observers.pre, newState, oldState );
	if ( this._fragment ) this._fragment.update( newState, this._state );
	dispatchObservers( this, this._observers.post, newState, oldState );
};

Details.prototype.teardown = function teardown ( detach ) {
	this.fire( 'teardown' );

	this._fragment.teardown( detach !== false );
	this._fragment = null;

	this._state = {};
};

var template$2 = (function () {

    return {

        onrender() {

            const $graph = $('#graph');
            var force, link, node;
            const graph = this.get('data');
            const height = $graph.height();
            var svg;
            const primarytype = this.get('primarytype');
            const primarytypecolor = this.get('primarytypecolor');
            const categorytype = this.get('categorytype');
            const categorytypecolor = this.get('categorytypecolor');
            const width = $graph.width();
            const radius = this.get('noderadius');

            click = click.bind(this); // allows using this.fire() etc...

            function init() {

                svg = d3.select('#graph').append('svg').attr('viewBox', '0 0 ' + width + ' ' + height).attr('width', width).attr('height', height);

                force = d3.layout.force()
                        .size([width, height])
                        .gravity(.05)
                        .distance(200)
                        .charge(-1000)
                        .friction(.6)
                        .on('tick', tick);

                link = svg.selectAll('.link');
                node = svg.selectAll('.node');
            }

            function update() {
                const result = getConnections();

                // Restart the force layout.
                force.nodes(result.nodes)
                        .links(result.links)
                        .start();

                // Update links.
                link = link.data(result.links);

                link.exit().remove();

                link.enter().insert("line")
                        .attr("class", "link");

                // Update nodes.
                node = node.data(result.nodes, function(d) {
                    return d.id;
                });

                node.exit().remove();

                const nodeEnter = node.enter()
                        .append("g")
                        .attr("class", "node")
                        .call(force.drag);

                nodeEnter.append("text")
                        .attr("class", function(d){
                            if(d.type.toLowerCase() === primarytype.toLowerCase()){
                                return 'primary';
                            }
                            return 'category';
                        })
                        .attr("dy", ".35em")
                        .text(function(d) { return d.label; })
                        .on("click", click);
            }

            function getConnections() {

                // first get an array of all primary and category types combined
                const nodes = graph.filter(function(n) {
                    return n.type.toLowerCase() === primarytype.toLowerCase() || n.type.toLowerCase() === categorytype.toLowerCase();
                });

                // now get an array of how each primary and category type is connected
                const links = [];

                for (let i = 0; i < nodes.length; i++) {
                    const n = nodes[i];

                    if (n.type.toLowerCase() === primarytype.toLowerCase()) {
                        const t = n[categorytype].split(',');
                        for (let j = 0; j < t.length; j++){
                            // for each connection, push a new object to links
                            links.push({
                                "source": i,
                                "target": nodes.findIndex(function(x) {
                                    return x.id.toLowerCase() === t[j].trim().toLowerCase();
                                })
                            });
                        }
                    }
                }

                return {
                    nodes: nodes,
                    links: links
                };
            }

            function tick() {

                link.attr('x1', function(d) { return d.source.x; })
                    .attr('y1', function(d) { return d.source.y; })
                    .attr('x2', function(d) { return d.target.x; })
                    .attr('y2', function(d) { return d.target.y; });

                node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

                node.attr("cx", function(d) { return d.x = Math.max(radius, Math.min(width - radius, d.x)); })
                    .attr("cy", function(d) { return d.y = Math.max(radius, Math.min(height - radius, d.y)); });
            }

            function click(d) {
                if (d3.event.defaultPrevented) return; // ignore drag
                this.fire('nodeselected', d);
                update();
            }

            init();
            update();
        },

        methods: {
            nodeselected(node) {
                alert(node);
            }
        }
	}

}());

let addedCss = false;
function addCss () {
	var style = createElement( 'style' );
	style.textContent = "\n    \n    \n\n";
	appendNode( style, document.head );

	addedCss = true;
}

function renderMainFragment$2 ( root, component ) {
	var div = createElement( 'div' );
	setAttribute( div, 'svelte-1144599852', '' );
	div.id = "graph";

	return {
		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
		},
		
		update: noop,
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( div );
			}
		}
	};
}

function Graph ( options ) {
	options = options || {};
	
	this._state = options.data || {};

	this._observers = {
		pre: Object.create( null ),
		post: Object.create( null )
	};

	this._handlers = Object.create( null );

	this._root = options._root;
	this._yield = options._yield;

	if ( !addedCss ) addCss();
	
	this._fragment = renderMainFragment$2( this._state, this );
	if ( options.target ) this._fragment.mount( options.target, null );
	
	if ( options._root ) {
		options._root._renderHooks.push({ fn: template$2.onrender, context: this });
	} else {
		template$2.onrender.call( this );
	}
}

Graph.prototype = template$2.methods;

Graph.prototype.get = get;
Graph.prototype.fire = fire;
Graph.prototype.observe = observe;
Graph.prototype.on = on;
Graph.prototype.set = set;
Graph.prototype._flush = _flush;

Graph.prototype._set = function _set ( newState ) {
	var oldState = this._state;
	this._state = Object.assign( {}, oldState, newState );
	
	dispatchObservers( this, this._observers.pre, newState, oldState );
	if ( this._fragment ) this._fragment.update( newState, this._state );
	dispatchObservers( this, this._observers.post, newState, oldState );
};

Graph.prototype.teardown = function teardown ( detach ) {
	this.fire( 'teardown' );

	this._fragment.teardown( detach !== false );
	this._fragment = null;

	this._state = {};
};

var template = (function () {

return {
	
	components: {
		Details,
		Graph
	},

	methods: {
		about: function() {
			this.set({ 
				page: "about", 
				details: this.get('aboutdetails')
			});
		},
		themes: function() {
			this.set({ 
				page: "themes", 
				graphcategory: "theme", 
				details: this.get('themedetails')
			});
		},
		form: function() {
			this.set({ 
				page: "form", 
				graphcategory: "form", 
				details: this.get('formdetails')
			});
		},
		nodeSelected: function(node) {
			this.set({
				details: {
					title: node.label,
					text: node.details,
					link: node.link,
					theme: node.theme ? node.theme.split(',') : null,
					form: node.form ? node.form.split(',') : null,
					image: node.image,
					vimeo: node.vimeo
				}
			});
		}
	}

}

}());

function renderMainFragment ( root, component ) {
	var header = createElement( 'header' );
	
	var ul = createElement( 'ul' );
	
	appendNode( ul, header );
	
	var li = createElement( 'li' );
	
	appendNode( li, ul );
	var ifBlock_anchor = createComment();
	appendNode( ifBlock_anchor, li );
	
	function getBlock ( root ) {
		if ( root.page === 'about' ) return renderIfBlock_0;
		return renderIfBlock_1;
	}
	
	var currentBlock = getBlock( root );
	var ifBlock = currentBlock && currentBlock( root, component );
	
	if ( ifBlock ) ifBlock.mount( ifBlock_anchor.parentNode, ifBlock_anchor );
	appendNode( createText( "\n\t\t" ), ul );
	
	var li1 = createElement( 'li' );
	
	appendNode( li1, ul );
	var ifBlock1_anchor = createComment();
	appendNode( ifBlock1_anchor, li1 );
	
	function getBlock1 ( root ) {
		if ( root.page === 'themes' ) return renderIfBlock1_0;
		return renderIfBlock1_1;
	}
	
	var currentBlock1 = getBlock1( root );
	var ifBlock1 = currentBlock1 && currentBlock1( root, component );
	
	if ( ifBlock1 ) ifBlock1.mount( ifBlock1_anchor.parentNode, ifBlock1_anchor );
	appendNode( createText( "\n\t\t" ), ul );
	
	var li2 = createElement( 'li' );
	
	appendNode( li2, ul );
	var ifBlock2_anchor = createComment();
	appendNode( ifBlock2_anchor, li2 );
	
	function getBlock2 ( root ) {
		if ( root.page === 'form' ) return renderIfBlock2_0;
		return renderIfBlock2_1;
	}
	
	var currentBlock2 = getBlock2( root );
	var ifBlock2 = currentBlock2 && currentBlock2( root, component );
	
	if ( ifBlock2 ) ifBlock2.mount( ifBlock2_anchor.parentNode, ifBlock2_anchor );
	var text2 = createText( "\n\n" );
	
	var main = createElement( 'main' );
	
	var ifBlock3_anchor = createComment();
	appendNode( ifBlock3_anchor, main );
	
	function getBlock3 ( root ) {
		if ( root.page === 'about' ) return renderIfBlock3_0;
		if ( root.page === 'themes' ) return renderIfBlock3_1;
		return renderIfBlock3_2;
	}
	
	var currentBlock3 = getBlock3( root );
	var ifBlock3 = currentBlock3 && currentBlock3( root, component );
	
	if ( ifBlock3 ) ifBlock3.mount( ifBlock3_anchor.parentNode, ifBlock3_anchor );

	return {
		mount: function ( target, anchor ) {
			insertNode( header, target, anchor );
			insertNode( text2, target, anchor );
			insertNode( main, target, anchor );
		},
		
		update: function ( changed, root ) {
			var _currentBlock = currentBlock;
			currentBlock = getBlock( root );
			if ( _currentBlock === currentBlock && ifBlock) {
				ifBlock.update( changed, root );
			} else {
				if ( ifBlock ) ifBlock.teardown( true );
				ifBlock = currentBlock && currentBlock( root, component );
				if ( ifBlock ) ifBlock.mount( ifBlock_anchor.parentNode, ifBlock_anchor );
			}
			
			var _currentBlock1 = currentBlock1;
			currentBlock1 = getBlock1( root );
			if ( _currentBlock1 === currentBlock1 && ifBlock1) {
				ifBlock1.update( changed, root );
			} else {
				if ( ifBlock1 ) ifBlock1.teardown( true );
				ifBlock1 = currentBlock1 && currentBlock1( root, component );
				if ( ifBlock1 ) ifBlock1.mount( ifBlock1_anchor.parentNode, ifBlock1_anchor );
			}
			
			var _currentBlock2 = currentBlock2;
			currentBlock2 = getBlock2( root );
			if ( _currentBlock2 === currentBlock2 && ifBlock2) {
				ifBlock2.update( changed, root );
			} else {
				if ( ifBlock2 ) ifBlock2.teardown( true );
				ifBlock2 = currentBlock2 && currentBlock2( root, component );
				if ( ifBlock2 ) ifBlock2.mount( ifBlock2_anchor.parentNode, ifBlock2_anchor );
			}
			
			var _currentBlock3 = currentBlock3;
			currentBlock3 = getBlock3( root );
			if ( _currentBlock3 === currentBlock3 && ifBlock3) {
				ifBlock3.update( changed, root );
			} else {
				if ( ifBlock3 ) ifBlock3.teardown( true );
				ifBlock3 = currentBlock3 && currentBlock3( root, component );
				if ( ifBlock3 ) ifBlock3.mount( ifBlock3_anchor.parentNode, ifBlock3_anchor );
			}
		},
		
		teardown: function ( detach ) {
			if ( ifBlock ) ifBlock.teardown( false );
			if ( ifBlock1 ) ifBlock1.teardown( false );
			if ( ifBlock2 ) ifBlock2.teardown( false );
			if ( ifBlock3 ) ifBlock3.teardown( false );
			
			if ( detach ) {
				detachNode( header );
				detachNode( text2 );
				detachNode( main );
			}
		}
	};
}

function renderIfBlock3_2 ( root, component ) {
	var details_initialData = {
		content: root.details
	};
	var details = new template.components.Details({
		target: null,
		_root: component._root || component,
		data: details_initialData
	});
	
	var text = createText( "\n\t\t" );
	
	var graph_initialData = {
		primarytype: "work",
		data: root.graphdata,
		categorytype: root.graphcategory,
		noderadius: root.noderadius
	};
	var graph = new template.components.Graph({
		target: null,
		_root: component._root || component,
		data: graph_initialData
	});
	
	graph.on( 'nodeselected', function ( event ) {
		component.nodeSelected(event);
	});

	return {
		mount: function ( target, anchor ) {
			details._fragment.mount( target, anchor );
			insertNode( text, target, anchor );
			graph._fragment.mount( target, anchor );
		},
		
		update: function ( changed, root ) {
			var details_changes = {};
			
			if ( 'details' in changed ) details_changes.content = root.details;
			
			if ( Object.keys( details_changes ).length ) details.set( details_changes );
			
			var graph_changes = {};
			
			if ( 'graphdata' in changed ) graph_changes.data = root.graphdata;
			if ( 'graphcategory' in changed ) graph_changes.categorytype = root.graphcategory;
			if ( 'noderadius' in changed ) graph_changes.noderadius = root.noderadius;
			
			if ( Object.keys( graph_changes ).length ) graph.set( graph_changes );
		},
		
		teardown: function ( detach ) {
			details.teardown( detach );
			graph.teardown( detach );
			
			if ( detach ) {
				detachNode( text );
			}
		}
	};
}

function renderIfBlock3_1 ( root, component ) {
	var details_initialData = {
		content: root.details
	};
	var details = new template.components.Details({
		target: null,
		_root: component._root || component,
		data: details_initialData
	});
	
	var text = createText( "\n\t\t" );
	
	var graph_initialData = {
		primarytype: "work",
		data: root.graphdata,
		categorytype: root.graphcategory,
		noderadius: root.noderadius
	};
	var graph = new template.components.Graph({
		target: null,
		_root: component._root || component,
		data: graph_initialData
	});
	
	graph.on( 'nodeselected', function ( event ) {
		component.nodeSelected(event);
	});

	return {
		mount: function ( target, anchor ) {
			details._fragment.mount( target, anchor );
			insertNode( text, target, anchor );
			graph._fragment.mount( target, anchor );
		},
		
		update: function ( changed, root ) {
			var details_changes = {};
			
			if ( 'details' in changed ) details_changes.content = root.details;
			
			if ( Object.keys( details_changes ).length ) details.set( details_changes );
			
			var graph_changes = {};
			
			if ( 'graphdata' in changed ) graph_changes.data = root.graphdata;
			if ( 'graphcategory' in changed ) graph_changes.categorytype = root.graphcategory;
			if ( 'noderadius' in changed ) graph_changes.noderadius = root.noderadius;
			
			if ( Object.keys( graph_changes ).length ) graph.set( graph_changes );
		},
		
		teardown: function ( detach ) {
			details.teardown( detach );
			graph.teardown( detach );
			
			if ( detach ) {
				detachNode( text );
			}
		}
	};
}

function renderIfBlock3_0 ( root, component ) {
	var details_initialData = {
		content: root.aboutdetails
	};
	var details = new template.components.Details({
		target: null,
		_root: component._root || component,
		data: details_initialData
	});

	return {
		mount: function ( target, anchor ) {
			details._fragment.mount( target, anchor );
		},
		
		update: function ( changed, root ) {
			var details_changes = {};
			
			if ( 'aboutdetails' in changed ) details_changes.content = root.aboutdetails;
			
			if ( Object.keys( details_changes ).length ) details.set( details_changes );
		},
		
		teardown: function ( detach ) {
			details.teardown( detach );
		}
	};
}

function renderIfBlock2_1 ( root, component ) {
	var a = createElement( 'a' );
	a.href = "#";
	
	function clickHandler ( event ) {
		component.form();
	}
	
	addEventListener( a, 'click', clickHandler );
	
	appendNode( createText( "Form" ), a );

	return {
		mount: function ( target, anchor ) {
			insertNode( a, target, anchor );
		},
		
		update: noop,
		
		teardown: function ( detach ) {
			removeEventListener( a, 'click', clickHandler );
			
			if ( detach ) {
				detachNode( a );
			}
		}
	};
}

function renderIfBlock2_0 ( root, component ) {
	var a = createElement( 'a' );
	a.href = "#";
	a.className = "selected";
	
	function clickHandler ( event ) {
		component.form();
	}
	
	addEventListener( a, 'click', clickHandler );
	
	appendNode( createText( "Form" ), a );

	return {
		mount: function ( target, anchor ) {
			insertNode( a, target, anchor );
		},
		
		update: noop,
		
		teardown: function ( detach ) {
			removeEventListener( a, 'click', clickHandler );
			
			if ( detach ) {
				detachNode( a );
			}
		}
	};
}

function renderIfBlock1_1 ( root, component ) {
	var a = createElement( 'a' );
	a.href = "#";
	
	function clickHandler ( event ) {
		component.themes();
	}
	
	addEventListener( a, 'click', clickHandler );
	
	appendNode( createText( "Themes" ), a );

	return {
		mount: function ( target, anchor ) {
			insertNode( a, target, anchor );
		},
		
		update: noop,
		
		teardown: function ( detach ) {
			removeEventListener( a, 'click', clickHandler );
			
			if ( detach ) {
				detachNode( a );
			}
		}
	};
}

function renderIfBlock1_0 ( root, component ) {
	var a = createElement( 'a' );
	a.href = "#";
	a.className = "selected";
	
	function clickHandler ( event ) {
		component.themes();
	}
	
	addEventListener( a, 'click', clickHandler );
	
	appendNode( createText( "Themes" ), a );

	return {
		mount: function ( target, anchor ) {
			insertNode( a, target, anchor );
		},
		
		update: noop,
		
		teardown: function ( detach ) {
			removeEventListener( a, 'click', clickHandler );
			
			if ( detach ) {
				detachNode( a );
			}
		}
	};
}

function renderIfBlock_1 ( root, component ) {
	var a = createElement( 'a' );
	a.href = "#";
	
	function clickHandler ( event ) {
		component.about();
	}
	
	addEventListener( a, 'click', clickHandler );
	
	appendNode( createText( "About" ), a );

	return {
		mount: function ( target, anchor ) {
			insertNode( a, target, anchor );
		},
		
		update: noop,
		
		teardown: function ( detach ) {
			removeEventListener( a, 'click', clickHandler );
			
			if ( detach ) {
				detachNode( a );
			}
		}
	};
}

function renderIfBlock_0 ( root, component ) {
	var a = createElement( 'a' );
	a.href = "#";
	a.className = "selected";
	
	function clickHandler ( event ) {
		component.about();
	}
	
	addEventListener( a, 'click', clickHandler );
	
	appendNode( createText( "About" ), a );

	return {
		mount: function ( target, anchor ) {
			insertNode( a, target, anchor );
		},
		
		update: noop,
		
		teardown: function ( detach ) {
			removeEventListener( a, 'click', clickHandler );
			
			if ( detach ) {
				detachNode( a );
			}
		}
	};
}

function App ( options ) {
	options = options || {};
	
	this._state = options.data || {};

	this._observers = {
		pre: Object.create( null ),
		post: Object.create( null )
	};

	this._handlers = Object.create( null );

	this._root = options._root;
	this._yield = options._yield;

	this._renderHooks = [];
	
	this._fragment = renderMainFragment( this._state, this );
	if ( options.target ) this._fragment.mount( options.target, null );
	
	this._flush();
}

App.prototype = template.methods;

App.prototype.get = get;
App.prototype.fire = fire;
App.prototype.observe = observe;
App.prototype.on = on;
App.prototype.set = set;
App.prototype._flush = _flush;

App.prototype._set = function _set ( newState ) {
	var oldState = this._state;
	this._state = Object.assign( {}, oldState, newState );
	
	dispatchObservers( this, this._observers.pre, newState, oldState );
	if ( this._fragment ) this._fragment.update( newState, this._state );
	dispatchObservers( this, this._observers.post, newState, oldState );
	
	this._flush();
};

App.prototype.teardown = function teardown ( detach ) {
	this.fire( 'teardown' );

	this._fragment.teardown( detach !== false );
	this._fragment = null;

	this._state = {};
};

var store = {
    "page": "about",
    "graphcategory": "theme",
    "noderadius": 80,
    "graphdata": [
        {
            "type": "work",
            "form": "Film",
            "theme": "Memory, Exile",
            "id": "Untitled2016",
            "label": "Untitled2016",
            "details": "The starting point for this sketch is a deteriorated section of family footage from the EYE archive. The footage, barely distinguishable, traces the ephemeral outline of a woman and child paddling at the shore. <a href='http://research.sophie-dixon.com/immersive-media/untitled-2016/'>link to blog</a>",
            //"vimeo": "162722775",
            "image": "untitled2016.jpg",
            "link": "http://research.sophie-dixon.com/immersive-media/untitled-2016/"
        },
        {
            "type": "work",
            "form": "Text",
            "theme": "Memory",
            "id": "AndOnlyFineThreads",
            "label": "AndOnlyFineThreads",
            "details": "Text goes here"
        },
        {
            "type": "work",
            "form": "Film",
            "theme": "Identity, TheSea",
            "id": "TheShore",
            "label": "The Shore",
            "details": "Text goes here"
        },
        {
            "type": "work",
            "form": "Film",
            "theme": "Identity, Exile",
            "id": "ScholtzsHouse",
            "label": "Scholtz's House",
            "details": "Text goes here"
        },
        {
            "type": "work",
            "form": "Film",
            "theme": "Identity, Mining",
            "id": "LaMortedlarbe",
            "label": "La Morte d'larbe",
            "details": "Text goes here"
        },
        {
            "type": "work",
            "form": "Text",
            "theme": "Storytelling",
            "id": "TheArtofNarrative",
            "label": "The Art of Narrative",
            "details": "Text goes here"
        },
        {
            "type": "theme",
            "id": "Memory",
            "label": "Memory",
            "details": "Text goes here"
        },
        {
            "type": "theme",
            "id": "Identity",
            "label": "Identity",
            "details": "Text goes here"
        },
        {
            "type": "theme",
            "id": "Mining",
            "label": "Mining",
            "details": "Text goes here"
        },
        {
            "type": "theme",
            "id": "Exile",
            "label": "Exile",
            "details": "Text goes here"
        },
        {
            "type": "theme",
            "id": "Storytelling",
            "label": "Storytelling",
            "details": "Text goes here"
        },
        {
            "type": "theme",
            "id": "TheSea",
            "label": "The Sea",
            "details": "Text goes here"
        },
        {
            "type": "form",
            "id": "Film",
            "label": "Film",
            "details": "Text goes here"
        },
        {
            "type": "form",
            "id": "Text",
            "label": "Text",
            "details": "Text goes here"
        }
    ],
    "details": {},
    "formdetails": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel interdum erat, sed pharetra dui. Sed vel odio ultricies, viverra est vitae, condimentum justo. Mauris sollicitudin, dolor quis aliquet posuere, ipsum nibh volutpat nulla, imperdiet aliquam lorem nisi id eros. Morbi quis ornare mi. Etiam quis eleifend justo, at facilisis sem. Nulla et pharetra neque. Curabitur a fermentum nisi. Suspendisse porttitor est luctus, fermentum quam bibendum, consectetur velit. Nullam nibh lacus, tempus nec maximus et, finibus sit amet orci."
    },
    "themedetails": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel interdum erat, sed pharetra dui. Sed vel odio ultricies, viverra est vitae, condimentum justo. Mauris sollicitudin, dolor quis aliquet posuere, ipsum nibh volutpat nulla, imperdiet aliquam lorem nisi id eros. Morbi quis ornare mi. Etiam quis eleifend justo, at facilisis sem. Nulla et pharetra neque. Curabitur a fermentum nisi. Suspendisse porttitor est luctus, fermentum quam bibendum, consectetur velit. Nullam nibh lacus, tempus nec maximus et, finibus sit amet orci."
    },
    "aboutdetails": {
        "text": "<p>I am inspired by artists and filmmakers who experiment with the interstices and intersections between the viewer and their work. The question of how <i>space</i>, as physical distance, can generate new forms of narrative has been the foundation for my artistic research at the Netherlands Film Academy.</p><p><i><b>Spatial Narratives</b></i> ​ questions ways in which narratives can be experienced spatially by the viewer, but also the role of narrative in communicating and externalising the everyday spaces we inhabit. Whether geographical locations or virtual spaces in memory, it is my conjecture that a single linear narrative cannot adequately convey the multiplicity, fluidity and connectivity which define our experience of them. From traditional storytelling to Virtual Reality, I've stepped outside of the cinema to consider how space and narrative co-exist in other media and in other forms.</p><p><i>'Untitled'</i> combines the interactivity from Virtual Reality with the spatial and aesthetic qualities of a moving image installation. Through interaction with the installation the viewer experiences the co-existing narratives of two people, in two times, joined by a ruined house in the village of Srbská.</p><p><i>Srbská</i>, a place I lived in and returned to for almost a decade is known also as Wünschendorf; a thriving Sudeten village which witnessed the exile of its entire ethnic German population in 1946. Wünschendorf’s decline into the cluster of houses now clinging to the Czech and Polish border situate it in the narrative I find most fascinating of all, that of memory. I have travelled to Germany, the Czech Republic and Poland to record the testimonies of those who remember the village. With each narrative I encounter, the more certain I am that the village can only exist in a multiplicity of these various and often contradictory narratives.</p><p>This certainty is behind the creation of Srbska.org, an online archive and space for the contribution and collection of stories and artefacts from the village. Still in its infancy it continues to grow through collaboration with researchers, oral historians and archivists.</p><p>Finally, <i>Spatial Narratives</i> is a broad collection of essays, works and ideas designed to be navigated through either the form which my research has taken or the theme it has explored.</p>"
    }
};

var app = new App({
    target: document.querySelector('body'),
    data: store
});

}());
//# sourceMappingURL=bundle.js.map
