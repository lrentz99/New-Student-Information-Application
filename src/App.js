import './App.css';
import React from "react";
import GoogleMap, {addMarkers, locationList, mapOptions} from './components/GoogleMap'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
      <div class="topnav">
         <a class="active" href="#logo">UF</a>

{/*the titles of the different navigation links*/ }
          <div>
            <Link to="home">Home</Link>
          </div >

          <div>
            <Link to="/academics">Academics</Link>
          </div>

          <div>
            <Link to="/finance">Finance</Link>
          </div>

          <div>
            <Link to="/health">Health</Link>
          </div>

          <div>
            <Link to="/housing">Housing</Link>
          </div>

          <div>
            <Link to="/map">Map</Link>
          </div>



          </div>
          </div>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time


          NOTE TO SELF GET RID OF EXACT makes it only one homepage
        */}
        <Switch>


          <Route path="/home">
            <Home />

          </Route>
          <Route path="/academics">
            <Academics />

          </Route>
          <Route path="/finance">
            <Finance />

            </Route>
          <Route path="/health">
            <Health />

            </Route>
          <Route path="/housing">
            <Housing />

            </Route>
          <Route path="/map">
            <Map />


          </Route>
        </Switch>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.
{/* HTML CODE GOES HERE*/}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Academics() {
  return (
    <div classname="AcademicsPage">
      <div class="column">
        <h1>Undergraduate Resources</h1>
        <div class="column">
          <h2>Advising</h2>
          <p><a href="http://www.ufadvising.ufl.edu/college-remote-advising-contacts/"
          target="_blank" rel="noopener noreferrer">College Remote Advising Center</a></p>
        </div>
        <div class="column">
          <h2>Tutoring</h2>
          <p><a href="https://teachingcenter.ufl.edu/tutoring/" target="_blank"
          rel="noopener noreferrer">Teaching Center</a></p>
        </div>
        <div class="column">
          <h2>Job Resources</h2>
          <p><a href="https://career.ufl.edu/"
          target="_blank" rel="noopener noreferrer">Career Center</a></p>
        </div>
        <div class="column">
          <h2>Honors Programs</h2>
          <p><a href="http://www.honors.ufl.edu/"
          target="_blank" rel="noopener noreferrer">Honors Program</a></p>
        </div>
        <div class="column">
          <h2>Admissions</h2>
          <p><a href="https://admissions.ufl.edu/apply/transfer/"
          target="_blank" rel="noopener noreferrer">Transfer Student Center</a></p>
        </div>
        <div class="column">
          <h2>Scholarships</h2>
          <p><a href="https://cur.aa.ufl.edu/scholarships/"
          target="_blank" rel="noopener noreferrer">Center for Undergraduate Research</a></p>
        </div>
      </div>
      <div class="column">
        <h1>Graduate Resources</h1>
        <div class="column">
          <h2>Graduate Resources</h2>
          <p><a href="http://graduateschool.ufl.edu/prospective-students/funding/fellowships/"
          target="_blank" rel="noopener noreferrer">Fellowships Center</a></p>
        </div>
      </div>
    </div>
  );
}

function Finance() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}


  function Health() {
    return (
      <div className="HealthPage">
        <div>
      <div class="header">
        <h1>In an emergency call 911.   For mental distress call the suicde hotline at 1-800-273-8255</h1>
      </div>


      <div class="ui divider"></div>
<div class="ui two column padded grid">
  <div class="column">
    <h1>STUDENTS</h1>

    <p><a href=" https://shcc.ufl.edu/">Student Health Center</a></p>

  </div>
</div>

  <div class="ui two column padded grid">
  <div class="column">
    <h1>COVID-19</h1>

    <p><a href=" https://www.cdc.gov/coronavirus/2019-nCoV/index.html">CDC-Covid-19</a></p>

  </div>
  </div>





  <div class="ui two column padded grid">
  <div class="column">

    <h1>MENTAL HEALTH</h1>
      <h2>Resources</h2>
    <p><a href=" https://www.mentalhealth.gov/basics/what-is-mental-health">Mental Health Basics</a></p>
    <h2>Stress Relief</h2>
    <p><a href=" https://www.youtube.com/watch?v=_f_BnneFanM">Music to relax to </a></p>

  </div>
  </div>

  <div class="ui two column padded grid">
  <div class="column">
    <h1>Shands</h1>
    <p><a href="https://ufhealth.org/">ufhealth.org</a></p>
  </div>
  </div>
      </div>
        {/* INSERT SUBMIT BUTTON THAT SENDS AN EMAIL OR DATA OR WHATEVER TO SUBMIT A NEW LINK */}


      </div>

    );
  }

    function Housing() {
      return (
        <div classname="HousingPage">
          <div class="column">
            <h1>Housing Page</h1>
            <div class="column">
              <h2>Undergraduate Housing</h2>
              <p><a href="https://www.housing.ufl.edu/housing/"
              target="_blank" rel="noopener noreferrer">Housing and Residence Education</a></p>
              <p><a href="https://www.housing.ufl.edu/about/staff/"
              target="_blank" rel="noopener noreferrer">Housing Staff Contact Info</a></p>
              <p><a href="https://www.housing.ufl.edu/campus-life/"
              target="_blank" rel="noopener noreferrer">Campus Life Information</a></p>
            </div>
            <div class="column">
              <h2>Off Campus Housing</h2>
              <p><a href="http://www.offcampus.ufl.edu/"
              target="_blank" rel="noopener noreferrer">Off Campus Housing Center</a></p>
            </div>
          </div>
          <div class="column">
            <h1>Resources</h1>
            <div class="column">
              <h2>Help Information</h2>
              <p><a href="https://hms.housing.ufl.edu/iservicedesk/f?p=100:1:10608586446464"
              target="_blank" rel="noopener noreferrer">iService Desk</a></p>
            </div>
          </div>
        </div>
      );
    }

      function Map() {


          var mapProps = {
          options: mapOptions,
          onMount: addMarkers,
          onMountProps: locationList,
        }

        return (
          <div>
            <h1>Map</h1>
            <GoogleMap{...mapProps} />
          </div>
        );
      }
