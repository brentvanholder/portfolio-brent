class PagesController < ApplicationController
  def home
    @marker = [{
      lat: 52.3600,
      lng: 4.8852,
      image_url: helpers.asset_url('house.svg')
    }] #Longtitude and Latitude Amsterdam
  end

  def pokemon
  end

  def itsadate
  end
end
