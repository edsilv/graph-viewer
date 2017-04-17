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

function destroyEach ( iterations, detach, start ) {
	for ( var i = start; i < iterations.length; i += 1 ) {
		iterations[i].destroy( detach );
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

function noop () {}

function assign ( target ) {
	for ( var i = 1; i < arguments.length; i += 1 ) {
		var source = arguments[i];
		for ( var k in source ) target[k] = source[k];
	}

	return target;
}

function differs ( a, b ) {
	return ( a !== b ) || ( a && ( typeof a === 'object' ) || ( typeof a === 'function' ) );
}

function dispatchObservers ( component, group, newState, oldState ) {
	for ( var key in group ) {
		if ( !( key in newState ) ) continue;

		var newValue = newState[ key ];
		var oldValue = oldState[ key ];

		if ( differs( newValue, oldValue ) ) {
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
	var group = ( options && options.defer ) ? this._observers.post : this._observers.pre;

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
	if ( eventName === 'teardown' ) return this.on( 'destroy', handler );

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
	this._set( assign( {}, newState ) );
	( this._root || this )._flush();
}

function _flush () {
	if ( !this._renderHooks ) return;

	while ( this._renderHooks.length ) {
		var hook = this._renderHooks.pop();
		hook.fn.call( hook.context );
	}
}

var proto = {
	get: get,
	fire: fire,
	observe: observe,
	on: on,
	set: set,
	_flush: _flush
};

function create_main_fragment$1 ( root, component ) {
	var div = createElement( 'div' );
	div.id = "details";
	var if_block_anchor = createComment();
	appendNode( if_block_anchor, div );
	
	function get_block ( root ) {
		if ( root.content.title ) return create_if_block_0$1;
		return null;
	}
	
	var current_block = get_block( root );
	var if_block = current_block && current_block( root, component );
	
	if ( if_block ) if_block.mount( if_block_anchor.parentNode, if_block_anchor );
	appendNode( createText( "\n    " ), div );
	var if_block_1_anchor = createComment();
	appendNode( if_block_1_anchor, div );
	
	function get_block_1 ( root ) {
		if ( root.content.image && root.content.link ) return create_if_block_2_0;
		if ( root.content.image ) return create_if_block_2_1;
		return null;
	}
	
	var current_block_1 = get_block_1( root );
	var if_block_1 = current_block_1 && current_block_1( root, component );
	
	if ( if_block_1 ) if_block_1.mount( if_block_1_anchor.parentNode, if_block_1_anchor );
	appendNode( createText( "\n    " ), div );
	var if_block_2_anchor = createComment();
	appendNode( if_block_2_anchor, div );
	
	function get_block_2 ( root ) {
		if ( root.content.vimeo ) return create_if_block_3_0;
		return null;
	}
	
	var current_block_2 = get_block_2( root );
	var if_block_2 = current_block_2 && current_block_2( root, component );
	
	if ( if_block_2 ) if_block_2.mount( if_block_2_anchor.parentNode, if_block_2_anchor );
	appendNode( createText( "\n    " ), div );
	var if_block_3_anchor = createComment();
	appendNode( if_block_3_anchor, div );
	
	function get_block_3 ( root ) {
		if ( root.content.text ) return create_if_block_4_0;
		return null;
	}
	
	var current_block_3 = get_block_3( root );
	var if_block_3 = current_block_3 && current_block_3( root, component );
	
	if ( if_block_3 ) if_block_3.mount( if_block_3_anchor.parentNode, if_block_3_anchor );
	appendNode( createText( "\n    " ), div );
	var if_block_4_anchor = createComment();
	appendNode( if_block_4_anchor, div );
	
	function get_block_4 ( root ) {
		if ( root.content.link ) return create_if_block_5_0;
		return null;
	}
	
	var current_block_4 = get_block_4( root );
	var if_block_4 = current_block_4 && current_block_4( root, component );
	
	if ( if_block_4 ) if_block_4.mount( if_block_4_anchor.parentNode, if_block_4_anchor );
	appendNode( createText( "\n    " ), div );
	var div_1 = createElement( 'div' );
	appendNode( div_1, div );
	div_1.className = "types";
	var if_block_5_anchor = createComment();
	appendNode( if_block_5_anchor, div_1 );
	
	function get_block_5 ( root ) {
		if ( root.content.theme ) return create_if_block_6_0;
		return null;
	}
	
	var current_block_5 = get_block_5( root );
	var if_block_5 = current_block_5 && current_block_5( root, component );
	
	if ( if_block_5 ) if_block_5.mount( if_block_5_anchor.parentNode, if_block_5_anchor );
	appendNode( createText( "\n        " ), div_1 );
	var if_block_6_anchor = createComment();
	appendNode( if_block_6_anchor, div_1 );
	
	function get_block_6 ( root ) {
		if ( root.content.form ) return create_if_block_7_0;
		return null;
	}
	
	var current_block_6 = get_block_6( root );
	var if_block_6 = current_block_6 && current_block_6( root, component );
	
	if ( if_block_6 ) if_block_6.mount( if_block_6_anchor.parentNode, if_block_6_anchor );

	return {
		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
		},
		
		update: function ( changed, root ) {
			var _current_block = current_block;
			current_block = get_block( root );
			if ( _current_block === current_block && if_block) {
				if_block.update( changed, root );
			} else {
				if ( if_block ) if_block.destroy( true );
				if_block = current_block && current_block( root, component );
				if ( if_block ) if_block.mount( if_block_anchor.parentNode, if_block_anchor );
			}
			
			var _current_block_1 = current_block_1;
			current_block_1 = get_block_1( root );
			if ( _current_block_1 === current_block_1 && if_block_1) {
				if_block_1.update( changed, root );
			} else {
				if ( if_block_1 ) if_block_1.destroy( true );
				if_block_1 = current_block_1 && current_block_1( root, component );
				if ( if_block_1 ) if_block_1.mount( if_block_1_anchor.parentNode, if_block_1_anchor );
			}
			
			var _current_block_2 = current_block_2;
			current_block_2 = get_block_2( root );
			if ( _current_block_2 === current_block_2 && if_block_2) {
				if_block_2.update( changed, root );
			} else {
				if ( if_block_2 ) if_block_2.destroy( true );
				if_block_2 = current_block_2 && current_block_2( root, component );
				if ( if_block_2 ) if_block_2.mount( if_block_2_anchor.parentNode, if_block_2_anchor );
			}
			
			var _current_block_3 = current_block_3;
			current_block_3 = get_block_3( root );
			if ( _current_block_3 === current_block_3 && if_block_3) {
				if_block_3.update( changed, root );
			} else {
				if ( if_block_3 ) if_block_3.destroy( true );
				if_block_3 = current_block_3 && current_block_3( root, component );
				if ( if_block_3 ) if_block_3.mount( if_block_3_anchor.parentNode, if_block_3_anchor );
			}
			
			var _current_block_4 = current_block_4;
			current_block_4 = get_block_4( root );
			if ( _current_block_4 === current_block_4 && if_block_4) {
				if_block_4.update( changed, root );
			} else {
				if ( if_block_4 ) if_block_4.destroy( true );
				if_block_4 = current_block_4 && current_block_4( root, component );
				if ( if_block_4 ) if_block_4.mount( if_block_4_anchor.parentNode, if_block_4_anchor );
			}
			
			var _current_block_5 = current_block_5;
			current_block_5 = get_block_5( root );
			if ( _current_block_5 === current_block_5 && if_block_5) {
				if_block_5.update( changed, root );
			} else {
				if ( if_block_5 ) if_block_5.destroy( true );
				if_block_5 = current_block_5 && current_block_5( root, component );
				if ( if_block_5 ) if_block_5.mount( if_block_5_anchor.parentNode, if_block_5_anchor );
			}
			
			var _current_block_6 = current_block_6;
			current_block_6 = get_block_6( root );
			if ( _current_block_6 === current_block_6 && if_block_6) {
				if_block_6.update( changed, root );
			} else {
				if ( if_block_6 ) if_block_6.destroy( true );
				if_block_6 = current_block_6 && current_block_6( root, component );
				if ( if_block_6 ) if_block_6.mount( if_block_6_anchor.parentNode, if_block_6_anchor );
			}
		},
		
		destroy: function ( detach ) {
			if ( if_block ) if_block.destroy( false );
			if ( if_block_1 ) if_block_1.destroy( false );
			if ( if_block_2 ) if_block_2.destroy( false );
			if ( if_block_3 ) if_block_3.destroy( false );
			if ( if_block_4 ) if_block_4.destroy( false );
			if ( if_block_5 ) if_block_5.destroy( false );
			if ( if_block_6 ) if_block_6.destroy( false );
			
			if ( detach ) {
				detachNode( div );
			}
		}
	};
}

function create_if_block_7_0 ( root, component ) {
	var div = createElement( 'div' );
	div.className = "type";
	var h3 = createElement( 'h3' );
	appendNode( h3, div );
	appendNode( createText( "Form" ), h3 );
	appendNode( createText( "\n                " ), div );
	var last_text_2 = root.content.form;
	var text_2 = createText( last_text_2 );
	appendNode( text_2, div );

	return {
		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
		},
		
		update: function ( changed, root ) {
			var tmp;
			
			if ( ( tmp = root.content.form ) !== last_text_2 ) {
				text_2.data = last_text_2 = tmp;
			}
		},
		
		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( div );
			}
		}
	};
}

function create_if_block_6_0 ( root, component ) {
	var div = createElement( 'div' );
	div.className = "type";
	var h3 = createElement( 'h3' );
	appendNode( h3, div );
	appendNode( createText( "Themes" ), h3 );
	appendNode( createText( "\n                " ), div );
	var ul = createElement( 'ul' );
	appendNode( ul, div );
	var each_block_anchor = createComment();
	appendNode( each_block_anchor, ul );
	var each_block_value = root.content.theme;
	var each_block_iterations = [];
	
	for ( var i = 0; i < each_block_value.length; i += 1 ) {
		each_block_iterations[i] = create_each_block( root, each_block_value, each_block_value[i], i, component );
		each_block_iterations[i].mount( each_block_anchor.parentNode, each_block_anchor );
	}

	return {
		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
		},
		
		update: function ( changed, root ) {
			var each_block_value = root.content.theme;
			
			for ( var i = 0; i < each_block_value.length; i += 1 ) {
				if ( !each_block_iterations[i] ) {
					each_block_iterations[i] = create_each_block( root, each_block_value, each_block_value[i], i, component );
					each_block_iterations[i].mount( each_block_anchor.parentNode, each_block_anchor );
				} else {
					each_block_iterations[i].update( changed, root, each_block_value, each_block_value[i], i );
				}
			}
			
			destroyEach( each_block_iterations, true, each_block_value.length );
			
			each_block_iterations.length = each_block_value.length;
		},
		
		destroy: function ( detach ) {
			destroyEach( each_block_iterations, false, 0 );
			
			if ( detach ) {
				detachNode( div );
			}
		}
	};
}

function create_each_block ( root, each_block_value, theme, theme_index, component ) {
	var li = createElement( 'li' );
	var last_text = theme;
	var text = createText( last_text );
	appendNode( text, li );

	return {
		mount: function ( target, anchor ) {
			insertNode( li, target, anchor );
		},
		
		update: function ( changed, root, each_block_value, theme, theme_index ) {
			var tmp;
			
			if ( ( tmp = theme ) !== last_text ) {
				text.data = last_text = tmp;
			}
		},
		
		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( li );
			}
		}
	};
}

function create_if_block_5_0 ( root, component ) {
	var a = createElement( 'a' );
	var last_a_href = root.content.link;
	a.href = last_a_href;
	a.className = "readmore";
	appendNode( createText( "Read more" ), a );

	return {
		mount: function ( target, anchor ) {
			insertNode( a, target, anchor );
		},
		
		update: function ( changed, root ) {
			var tmp;
			
			if ( ( tmp = root.content.link ) !== last_a_href ) {
				last_a_href = tmp;
				a.href = last_a_href;
			}
		},
		
		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( a );
			}
		}
	};
}

function create_if_block_4_0 ( root, component ) {
	var p = createElement( 'p' );
	var raw_before = createElement( 'noscript' );
	appendNode( raw_before, p );
	var raw_after = createElement( 'noscript' );
	appendNode( raw_after, p );
	var last_raw = root.content.text;
	raw_before.insertAdjacentHTML( 'afterend', last_raw );

	return {
		mount: function ( target, anchor ) {
			insertNode( p, target, anchor );
		},
		
		update: function ( changed, root ) {
			var tmp;
			
			if ( ( tmp = root.content.text ) !== last_raw ) {
				last_raw = tmp;
				detachBetween( raw_before, raw_after );
				raw_before.insertAdjacentHTML( 'afterend', last_raw );
			}
		},
		
		destroy: function ( detach ) {
			if ( detach ) {
				detachBetween( raw_before, raw_after );
				
				detachNode( p );
			}
		}
	};
}

function create_if_block_3_0 ( root, component ) {
	var div = createElement( 'div' );
	div.className = "image-or-video";
	var iframe = createElement( 'iframe' );
	appendNode( iframe, div );
	var last_iframe_src = "https://player.vimeo.com/video/" + ( root.content.vimeo ) + "?title=0&byline=0&portrait=0";
	iframe.src = last_iframe_src;
	iframe.width = "400";
	iframe.height = "225";
	setAttribute( iframe, 'frameborder', "0" );
	setAttribute( iframe, 'webkitallowfullscreen', true );
	setAttribute( iframe, 'mozallowfullscreen', true );
	iframe.allowFullscreen = true;

	return {
		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
		},
		
		update: function ( changed, root ) {
			var tmp;
			
			if ( ( tmp = "https://player.vimeo.com/video/" + ( root.content.vimeo ) + "?title=0&byline=0&portrait=0" ) !== last_iframe_src ) {
				last_iframe_src = tmp;
				iframe.src = last_iframe_src;
			}
		},
		
		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( div );
			}
		}
	};
}

function create_if_block_2_1 ( root, component ) {
	var div = createElement( 'div' );
	div.className = "image-or-video";
	var img = createElement( 'img' );
	appendNode( img, div );
	var last_img_src = "images/" + ( root.content.image );
	img.src = last_img_src;

	return {
		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
		},
		
		update: function ( changed, root ) {
			var tmp;
			
			if ( ( tmp = "images/" + ( root.content.image ) ) !== last_img_src ) {
				last_img_src = tmp;
				img.src = last_img_src;
			}
		},
		
		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( div );
			}
		}
	};
}

function create_if_block_2_0 ( root, component ) {
	var div = createElement( 'div' );
	div.className = "image-or-video";
	var a = createElement( 'a' );
	appendNode( a, div );
	var last_a_href = root.content.link;
	a.href = last_a_href;
	var img = createElement( 'img' );
	appendNode( img, a );
	var last_img_src = "images/" + ( root.content.image );
	img.src = last_img_src;

	return {
		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
		},
		
		update: function ( changed, root ) {
			var tmp;
			
			if ( ( tmp = root.content.link ) !== last_a_href ) {
				last_a_href = tmp;
				a.href = last_a_href;
			}
			
			if ( ( tmp = "images/" + ( root.content.image ) ) !== last_img_src ) {
				last_img_src = tmp;
				img.src = last_img_src;
			}
		},
		
		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( div );
			}
		}
	};
}

function create_if_block_0$1 ( root, component ) {
	var h2 = createElement( 'h2' );
	var last_text = root.content.title;
	var text = createText( last_text );
	appendNode( text, h2 );

	return {
		mount: function ( target, anchor ) {
			insertNode( h2, target, anchor );
		},
		
		update: function ( changed, root ) {
			var tmp;
			
			if ( ( tmp = root.content.title ) !== last_text ) {
				text.data = last_text = tmp;
			}
		},
		
		destroy: function ( detach ) {
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
	
	this._torndown = false;
	
	this._fragment = create_main_fragment$1( this._state, this );
	if ( options.target ) this._fragment.mount( options.target, null );
}

assign( Details.prototype, proto );

Details.prototype._set = function _set ( newState ) {
	var oldState = this._state;
	this._state = assign( {}, oldState, newState );
	
	dispatchObservers( this, this._observers.pre, newState, oldState );
	if ( this._fragment ) this._fragment.update( newState, this._state );
	dispatchObservers( this, this._observers.post, newState, oldState );
};

Details.prototype.teardown = Details.prototype.destroy = function destroy ( detach ) {
	this.fire( 'destroy' );

	this._fragment.destroy( detach !== false );
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

var template$1 = (function () {

    return {

        oncreate() {

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

var added_css = false;
function add_css () {
	var style = createElement( 'style' );
	style.textContent = "\n    \n    \n\n";
	appendNode( style, document.head );

	added_css = true;
}

function create_main_fragment$2 ( root, component ) {
	var div = createElement( 'div' );
	setAttribute( div, 'svelte-1653548994', '' );
	div.id = "graph";

	return {
		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
		},
		
		update: noop,
		
		destroy: function ( detach ) {
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
	
	this._torndown = false;
	if ( !added_css ) add_css();
	
	this._fragment = create_main_fragment$2( this._state, this );
	if ( options.target ) this._fragment.mount( options.target, null );
	
	if ( options._root ) {
		options._root._renderHooks.push({ fn: template$1.oncreate, context: this });
	} else {
		template$1.oncreate.call( this );
	}
}

assign( Graph.prototype, template$1.methods, proto );

Graph.prototype._set = function _set ( newState ) {
	var oldState = this._state;
	this._state = assign( {}, oldState, newState );
	
	dispatchObservers( this, this._observers.pre, newState, oldState );
	if ( this._fragment ) this._fragment.update( newState, this._state );
	dispatchObservers( this, this._observers.post, newState, oldState );
};

Graph.prototype.teardown = Graph.prototype.destroy = function destroy ( detach ) {
	this.fire( 'destroy' );

	this._fragment.destroy( detach !== false );
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

var template = (function () {

return {
	
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

function create_main_fragment ( root, component ) {
	var header = createElement( 'header' );
	var ul = createElement( 'ul' );
	appendNode( ul, header );
	var li = createElement( 'li' );
	appendNode( li, ul );
	var a = createElement( 'a' );
	appendNode( a, li );
	a.href = "#";
	var last_a_class = root.page === "about" ? "selected" : "";
	a.className = last_a_class;
	
	function click_handler ( event ) {
		component.about();
	}
	
	addEventListener( a, 'click', click_handler );
	appendNode( createText( "About" ), a );
	var li_1 = createElement( 'li' );
	appendNode( li_1, ul );
	var a_1 = createElement( 'a' );
	appendNode( a_1, li_1 );
	a_1.href = "#";
	var last_a_1_class = root.page === "themes" ? "selected" : "";
	a_1.className = last_a_1_class;
	
	function click_handler_1 ( event ) {
		component.themes();
	}
	
	addEventListener( a_1, 'click', click_handler_1 );
	appendNode( createText( "Themes" ), a_1 );
	var li_2 = createElement( 'li' );
	appendNode( li_2, ul );
	var a_2 = createElement( 'a' );
	appendNode( a_2, li_2 );
	a_2.href = "#";
	var last_a_2_class = root.page === "form" ? "selected" : "";
	a_2.className = last_a_2_class;
	
	function click_handler_2 ( event ) {
		component.form();
	}
	
	addEventListener( a_2, 'click', click_handler_2 );
	appendNode( createText( "Form" ), a_2 );
	var text_3 = createText( "\n\n" );
	var main = createElement( 'main' );
	var if_block_anchor = createComment();
	appendNode( if_block_anchor, main );
	
	function get_block ( root ) {
		if ( root.page === 'about' ) return create_if_block_0;
		if ( root.page === 'themes' ) return create_if_block_1;
		return create_if_block_2;
	}
	
	var current_block = get_block( root );
	var if_block = current_block && current_block( root, component );
	
	if ( if_block ) if_block.mount( if_block_anchor.parentNode, if_block_anchor );

	return {
		mount: function ( target, anchor ) {
			insertNode( header, target, anchor );
			insertNode( text_3, target, anchor );
			insertNode( main, target, anchor );
		},
		
		update: function ( changed, root ) {
			var tmp;
			
			if ( ( tmp = root.page === "about" ? "selected" : "" ) !== last_a_class ) {
				last_a_class = tmp;
				a.className = last_a_class;
			}
			
			if ( ( tmp = root.page === "themes" ? "selected" : "" ) !== last_a_1_class ) {
				last_a_1_class = tmp;
				a_1.className = last_a_1_class;
			}
			
			if ( ( tmp = root.page === "form" ? "selected" : "" ) !== last_a_2_class ) {
				last_a_2_class = tmp;
				a_2.className = last_a_2_class;
			}
			
			var _current_block = current_block;
			current_block = get_block( root );
			if ( _current_block === current_block && if_block) {
				if_block.update( changed, root );
			} else {
				if ( if_block ) if_block.destroy( true );
				if_block = current_block && current_block( root, component );
				if ( if_block ) if_block.mount( if_block_anchor.parentNode, if_block_anchor );
			}
		},
		
		destroy: function ( detach ) {
			removeEventListener( a, 'click', click_handler );
			removeEventListener( a_1, 'click', click_handler_1 );
			removeEventListener( a_2, 'click', click_handler_2 );
			if ( if_block ) if_block.destroy( false );
			
			if ( detach ) {
				detachNode( header );
				detachNode( text_3 );
				detachNode( main );
			}
		}
	};
}

function create_if_block_2 ( root, component ) {
	var details = new Details({
		target: null,
		_root: component._root || component,
		data: { content: root.details }
	});
	
	var text = createText( "\n\t\t" );
	
	var graph = new Graph({
		target: null,
		_root: component._root || component,
		data: {
			primarytype: "work",
			data: root.graphdata,
			categorytype: root.graphcategory,
			noderadius: root.noderadius
		}
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
		
		destroy: function ( detach ) {
			details.destroy( detach );
			graph.destroy( detach );
			
			if ( detach ) {
				detachNode( text );
			}
		}
	};
}

function create_if_block_1 ( root, component ) {
	var details = new Details({
		target: null,
		_root: component._root || component,
		data: { content: root.details }
	});
	
	var text = createText( "\n\t\t" );
	
	var graph = new Graph({
		target: null,
		_root: component._root || component,
		data: {
			primarytype: "work",
			data: root.graphdata,
			categorytype: root.graphcategory,
			noderadius: root.noderadius
		}
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
		
		destroy: function ( detach ) {
			details.destroy( detach );
			graph.destroy( detach );
			
			if ( detach ) {
				detachNode( text );
			}
		}
	};
}

function create_if_block_0 ( root, component ) {
	var details = new Details({
		target: null,
		_root: component._root || component,
		data: { content: root.aboutdetails }
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
		
		destroy: function ( detach ) {
			details.destroy( detach );
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
	
	this._torndown = false;
	this._renderHooks = [];
	
	this._fragment = create_main_fragment( this._state, this );
	if ( options.target ) this._fragment.mount( options.target, null );
	
	this._flush();
}

assign( App.prototype, template.methods, proto );

App.prototype._set = function _set ( newState ) {
	var oldState = this._state;
	this._state = assign( {}, oldState, newState );
	
	dispatchObservers( this, this._observers.pre, newState, oldState );
	if ( this._fragment ) this._fragment.update( newState, this._state );
	dispatchObservers( this, this._observers.post, newState, oldState );
	
	this._flush();
};

App.prototype.teardown = App.prototype.destroy = function destroy ( detach ) {
	this.fire( 'destroy' );

	this._fragment.destroy( detach !== false );
	this._fragment = null;

	this._state = {};
	this._torndown = true;
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

const app = new App({
	target: document.querySelector('body'),
	data: store
});

}());
//# sourceMappingURL=bundle.js.map
