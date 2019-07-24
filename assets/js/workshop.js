(function ($) {

    var attendeesNumber = 1;

    var WorkshopForm = {
        init: function () {
            this.opcoPlaceHolder = $("#opcoQuestions");
            this.opcoInput = $("#opco");
            this.delegateInput = $("#delegate");
            this.attendeesPlaceHolder = $("#attendees");
            this.opcoInput.on('change', () => WorkshopForm.checkOpco());
            this.delegateInput.on('change', () => WorkshopForm.checkDelegate());
            this.addButton = $("#addAttendee");
            this.removeButton = $("#removeAttendee");
            this.addButton.on('click', () => {
                attendeesNumber = Math.min(6, attendeesNumber+1);
                WorkshopForm.hideUnusedAttendees();
            });
            this.removeButton.on('click', () => {
                attendeesNumber = Math.max(1, attendeesNumber-1);
                WorkshopForm.hideUnusedAttendees();
            });
            //this.checkOpco();
            //this.checkDelegate();
        },
        checkOpco: function () {
            this.opcoPlaceHolder.toggleClass("hidden", !this.opcoInput.is(':checked'));
        },
        hideUnusedAttendees: function () {
            var attendees = this.attendeesPlaceHolder.find(".attendee");
            attendees.slice(0, attendeesNumber).show();
            attendees.slice(attendeesNumber).hide();
            if(attendeesNumber === 6) {
                this.addButton.hide();
            } else {
                this.addButton.show();
            }
            if(attendeesNumber === 1) {
                this.removeButton.hide();
            } else {
                this.removeButton.show();
            }
        },
        checkDelegate: function () {
            this.attendeesPlaceHolder.toggleClass("hidden", this.delegateInput.is(':checked'));
            this.hideUnusedAttendees();
            /* if (this.delegateInput.is(':checked')) {
                this.attendeesPlaceHolder.empty();
            } else {
                var addButton = $(this.addAttendeeButton);
                addButton.on('click', () => WorkshopForm.addAttendee());
                this.attendeesPlaceHolder.append(this.attendeeTemplate);
                this.attendeesPlaceHolder.append(addButton);
            } */
        },
        addAttendee: function () {
            var attendeesCount = this.attendeesPlaceHolder.find(".attendee").size() + 1;
            var newBlock = $(this.attendeeTemplate);
            var removeButton = $(this.removeAttendeeButton);
            newBlock.find("h5").text("Participant·e " + attendeesCount);
            newBlock.find("label").first().attr('for', 'attendee_name_' + attendeesCount);
            newBlock.find("label").last().attr('for', 'attendee_function_' + attendeesCount);
            newBlock.find("input").first()
                .attr('name', 'attendee_name_' + attendeesCount)
                .attr('id', 'attendee_name_' + attendeesCount);
            newBlock.find("input").last()
                .attr('name', 'attendee_function_' + attendeesCount)
                .attr('id', 'attendee_function_' + attendeesCount);
            this.attendeesPlaceHolder.find("#addAttendee")
                .before(newBlock)
                .before(removeButton);
            removeButton.on('click', () => {
                removeButton.off('click');
                newBlock.remove();
                removeButton.remove();
                WorkshopForm.computeAttendeesPositions();
            });
        },
        computeAttendeesPositions: function () {
            this.attendeesPlaceHolder.find(".attendee").each((index, element) => {
                $(element).find('h5').text('Participant·e ' + (index + 1));
            });
        }
    };

    $(document).on('ready', function () {
        WorkshopForm.init();
    });

})(jQuery);