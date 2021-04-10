// A basic version which is simple an elegant

// particlesJS("drawSketch", {
//   "particles": {
//     "number": {
//       "value": 150,
//       "density": {
//         "enable": true,
//         "value_area": 800
//       }
//     },
//     "color": {
//       // "value": "#963232"
//       "value": "6569af"
//     },
//     "shape": {
//       "type": "polygon",
//       "stroke": {
//         "width": 3,
//         "color": "#342770"
//       },
//       "polygon": {
//         "nb_sides": 6
//       },
//       "image": {
//         "src": "img/github.svg",
//         "width": 100,
//         "height": 100
//       }
//     },
//     "opacity": {
//       "value": 0.66,
//       "random": true,
//       "anim": {
//         "enable": true,
//         "speed": 1,
//         "opacity_min": 0.3,
//         "sync": true
//       }
//     },
//     "size": {
//       "value": 18,
//       "random": true,
//       "anim": {
//         "enable": true,
//         "speed": 40,
//         "size_min": 0.1,
//         "sync": false
//       }
//     },
//     "line_linked": {
//       "enable": true,
//       "distance": 60,
//       "color": "#483d7d",
//       "opacity": 0.9,
//       "width": 3
//     },
//     "move": {
//       "enable": true,
//       "speed": 4,
//       "direction": "top-right",
//       "random": true,
//       "straight": true,
//       "out_mode": "out",
//       "bounce": false,
//       "attract": {
//         "enable": false,
//         "rotateX": 600,
//         "rotateY": 1200
//       }
//     }
//   },
//   "interactivity": {
//     "detect_on": "window",
//     "events": {
//       "onhover": {
//         "enable": true,
//         "mode": "bubble"
//       },
//       "onclick": {
//         "enable": true,
//         "mode": "push"
//       },
//       "resize": true
//     },
//     "modes": {
//       "grab": {
//         "distance": 400,
//         "line_linked": {
//           "opacity": 1
//         }
//       },
//       "bubble": {
//         "distance": 200,
//         "size": 25,
//         "duration": 2,
//         "opacity": 0.9,
//         "speed": 3
//       },
//       "repulse": {
//         "distance": 200,
//         "duration": 0.4
//       },
//       "push": {
//         "particles_nb": 4
//       },
//       "remove": {
//         "particles_nb": 2
//       }
//     }
//   },
//   "retina_detect": true
// });

// another softer feel
particlesJS("drawSketch", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 350
            }
        },
        "color": {
            "value": "#245791"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 1,
                "color": "#1e1010"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.48102361825965684,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.2,
                "sync": false
            }
        },
        "size": {
            "value": 16.03412060865523,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 80,
            "color": "#000000",
            "opacity": 0.42490419612936353,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "top-right",
            "random": true,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 300,
                "size": 40,
                "duration": 2,
                "opacity": 0.9,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
// var count_particles, stats, update;
// stats = new Stats;
// stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function() {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
// };
// requestAnimationFrame(update);;

// most elegant version - hexagon on light background
// particlesJS("drawSketch", {
//   "particles": {
//     "number": {
//       "value": 10,
//       "density": {
//         "enable": true,
//         "value_area": 800
//       }
//     },
//     "color": {
//       "value": "#191d3c"
//     },
//     "shape": {
//       "type": "polygon",
//       "stroke": {
//         "width": 0,
//         "color": "#000"
//       },
//       "polygon": {
//         "nb_sides": 6
//       },
//       "image": {
//         "src": "",
//         "width": 100,
//         "height": 100
//       }
//     },
//     "opacity": {
//       "value": 0.3,
//       "random": true,
//       "anim": {
//         "enable": false,
//         "speed": 1,
//         "opacity_min": 0.1,
//         "sync": false
//       }
//     },
//     "size": {
//       "value": 160,
//       "random": false,
//       "anim": {
//         "enable": true,
//         "speed": 10,
//         "size_min": 40,
//         "sync": false
//       }
//     },
//     "line_linked": {
//       "enable": false,
//       "distance": 200,
//       "color": "#ffffff",
//       "opacity": 1,
//       "width": 2
//     },
//     "move": {
//       "enable": true,
//       "speed": 8,
//       "direction": "none",
//       "random": true,
//       "straight": false,
//       "out_mode": "out",
//       "bounce": false,
//       "attract": {
//         "enable": false,
//         "rotateX": 600,
//         "rotateY": 1200
//       }
//     }
//   },
//   "interactivity": {
//     "detect_on": "window",
//     "events": {
//       "onhover": {
//         "enable": false,
//         "mode": "bubble"
//       },
//       "onclick": {
//         "enable": false,
//         "mode": "push"
//       },
//       "resize": true
//     },
//     "modes": {
//       "grab": {
//         "distance": 400,
//         "line_linked": {
//           "opacity": 1
//         }
//       },
//       "bubble": {
//         "distance": 400,
//         "size": 40,
//         "duration": 2,
//         "opacity": 8,
//         "speed": 3
//       },
//       "repulse": {
//         "distance": 200,
//         "duration": 0.4
//       },
//       "push": {
//         "particles_nb": 4
//       },
//       "remove": {
//         "particles_nb": 2
//       }
//     }
//   },
//   "retina_detect": true
// });


// vibrant version
// particlesJS("drawSketch", {
//   "particles": {
//     "number": {
//       "value": 111,
//       "density": {
//         "enable": true,
//         "value_area": 800
//       }
//     },
//     "color": {
//       "value": "#9d2b2b"
//     },
//     "shape": {
//       "type": "polygon",
//       "stroke": {
//         "width": 2,
//         "color": "#a21f1f"
//       },
//       "polygon": {
//         "nb_sides": 6
//       },
//       "image": {
//         "src": "img/github.svg",
//         "width": 100,
//         "height": 100
//       }
//     },
//     "opacity": {
//       "value": 0.5,
//       "random": false,
//       "anim": {
//         "enable": false,
//         "speed": 1,
//         "opacity_min": 0.1,
//         "sync": false
//       }
//     },
//     "size": {
//       "value": 8.017060304327615,
//       "random": true,
//       "anim": {
//         "enable": false,
//         "speed": 40,
//         "size_min": 0.1,
//         "sync": false
//       }
//     },
//     "line_linked": {
//       "enable": true,
//       "distance": 90,
//       "color": "#d49a9a",
//       "opacity": 0.4,
//       "width": 1
//     },
//     "move": {
//       "enable": true,
//       "speed": 3,
//       "direction": "top-right",
//       "random": true,
//       "straight": true,
//       "out_mode": "out",
//       "bounce": false,
//       "attract": {
//         "enable": false,
//         "rotateX": 600,
//         "rotateY": 1200
//       }
//     }
//   },
//   "interactivity": {
//     "detect_on": "window",
//     "events": {
//       "onhover": {
//         "enable": true,
//         "mode": "bubble"
//       },
//       "onclick": {
//         "enable": true,
//         "mode": "repulse"
//       },
//       "resize": true
//     },
//     "modes": {
//       "grab": {
//         "distance": 400,
//         "line_linked": {
//           "opacity": 1
//         }
//       },
//       "bubble": {
//         "distance": 400,
//         "size": 40,
//         "duration": 2,
//         "opacity": 0.8,
//         "speed": 3
//       },
//       "repulse": {
//         "distance": 200,
//         "duration": 0.4
//       },
//       "push": {
//         "particles_nb": 4
//       },
//       "remove": {
//         "particles_nb": 2
//       }
//     }
//   },
//   "retina_detect": true
// });

// this is p5 background
// function setup() {
//     var myCanvas = createCanvas(1000, 800);
//     myCanvas.class('backgroundsketch');
// }

// function draw() {
//   	ellipse(50, 50, 80, 80);
// }

// function mouseMoved() {
// 	ellipse(mouseX, mouseY, 80, 80);
// }