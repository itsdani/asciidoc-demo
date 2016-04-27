namespace :doc do
  desc 'prepare build'
  task :prebuild do
    Dir.mkdir 'doc_images' unless Dir.exists? 'doc_images'
      Dir.glob("extra/*/*.png").each do |image|
      FileUtils.copy(image, "doc_images/" + File.basename(image))
    end
      Dir.glob("screenshots/*.png").each do |image|
      FileUtils.copy(image, "doc_images/" + File.basename(image))
    end
  end

  desc 'build basic documentation formats'
  task :build => :prebuild do
    puts "Converting to HTML..."
      #`bundle exec asciidoctor -T ~/git/asciidoctor-deck.js/templates/haml demo-deck.adoc`
      `bundle exec asciidoctor -T ~/git/asciidoctor-backends -E slim demo-deck.adoc`
      #`bundle exec asciidoctor demo-deck.adoc`
    puts " -- HTML output at demo-deck.html"

    puts "Converting to PDF... (this one takes a while)"
    `bundle exec asciidoctor-pdf -a pdf-stylesdir=./ -a pdf-style=basic demo-deck.adoc`
    puts " -- PDF  output at demo-deck.pdf"
  end

  desc 'clean out generated formats'
  task :clean do
    `rm demo-deck.html`
    `rm demo-deck.pdf`
  end
end
