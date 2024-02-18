# config/importmap.rb

pin_all_from "app/javascript", under: "javascript"

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js",  preload: true
pin_all_from "app/javascript/controllers", to: "controllers"
pin "@popperjs/core", to: "popper.js", preload: true
pin "bootstrap", to: "bootstrap.min.js", preload: true
