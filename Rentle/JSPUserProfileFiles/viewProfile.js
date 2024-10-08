function viewUserProfile() {
    var itemUserId = $('.view_item_user_id').text().trim();
    console.log(itemUserId);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "JSPUserProfileFiles/viewUserProfile.jsp?itemUserId=" + encodeURIComponent(itemUserId), true);
                    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var existingElement = document.getElementsByClassName("view_user_profile")[0];
            existingElement.insertAdjacentHTML('afterbegin', xhr.responseText);
            console.log("View user profile added");
            
        } else {
            console.log("View user profile not added");
        }
    };
    xhr.send();
}

function viewRenterReviews() {
    var itemUserId = $('.view_item_user_id').text().trim();

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "JSPUserProfileFiles/viewRenterReviews.jsp?itemUserId=" + encodeURIComponent(itemUserId), true);
                    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var testElement = document.getElementById('renter_reviews_list_1');
            testElement.innerHTML = xhr.responseText;
            console.log("View renter reviews added");
            
        } else {
            console.log("View renter reviews not added");
        }
    };
    xhr.send();
}

function viewRentingReviews() {
    var itemUserId = $('.view_item_user_id').text().trim();

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "JSPUserProfileFiles/viewRentingReviews.jsp?itemUserId=" + encodeURIComponent(itemUserId), true);
                    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var testElement = document.getElementById('renting_reviews_list_1');
            testElement.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

function viewFriendsTabUserProfile() {
    var itemUserId = $('.friends_view_user_id').text().trim();
    var currentUserId = $('#user_id').text().trim();

    console.log(itemUserId);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "JSPUserProfileFiles/viewUserProfileFriendsTab.jsp?itemUserId=" + encodeURIComponent(itemUserId)
                    + "&currentUserId=" + encodeURIComponent(currentUserId), true);
                    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var existingElement = document.getElementsByClassName("friends_view_module_2")[0];
            existingElement.insertAdjacentHTML('afterbegin', xhr.responseText);
        }
    };
    xhr.send();
}


function viewFriendsTabRenterReviews() {
    var itemUserId = $('.friends_view_user_id').text().trim();

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "JSPUserProfileFiles/viewRenterReviewsFriendsTab.jsp?itemUserId=" + encodeURIComponent(itemUserId), true);
                    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var testElement = document.getElementById('renter_reviews_list_2');
            testElement.innerHTML = xhr.responseText;
            var scriptTags = testElement.getElementsByTagName('script');
            var friendsRentingReviews = "";
            for (var i = 0; i < scriptTags.length; i++) {
                var scriptContent = scriptTags[i].textContent || scriptTags[i].innerText;
                var match = scriptContent.match(/var friendsRenterReviews\s*=\s*"([^"]*)";/);
                if (match) {
                    friendsRentingReviews = match[1];
                    break;
                }
            }
            $('.renter_reviews_friends_tab_average').text(friendsRentingReviews);   
        }
    };
    xhr.send();
}

function viewFriendsTabRentingReviews() {
    var itemUserId = $('.friends_view_user_id').text().trim();

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "JSPUserProfileFiles/viewRentingReviewsFriendsTab.jsp?itemUserId=" + encodeURIComponent(itemUserId), true);
                    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var testElement = document.getElementById('renting_reviews_list_2');
            testElement.innerHTML = xhr.responseText;
            var scriptTags = testElement.getElementsByTagName('script');
            var friendsRentingReviews = "";
            for (var i = 0; i < scriptTags.length; i++) {
                var scriptContent = scriptTags[i].textContent || scriptTags[i].innerText;
                var match = scriptContent.match(/var friendsRentingReviews\s*=\s*"([^"]*)";/);
                if (match) {
                    friendsRentingReviews = match[1];
                    break;
                }
            }
            $('.renting_reviews_friends_tab_average').text(friendsRentingReviews);
        } else {
            console.log("View renting reviews not added");
        }
    };
    xhr.send();
}