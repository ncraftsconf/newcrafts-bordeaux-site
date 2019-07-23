(function ($) {

    var WorkshopForm = {
        init: function () {
            this.addAttendeeButton = $("#add-attendee-template").html();
            this.removeAttendeeButton = $("#remove-attendee-template").html();
            this.opcoTemplate = $("#opco-template").html();
            this.opcoPlaceHolder = $("#opcoQuestions");
            this.opcoInput = $("#opco");
            this.delegateInput = $("#delegate");
            this.attendeeTemplate = $("#attendee-template").html();
            this.attendeesPlaceHolder = $("#attendees");
            this.opcoInput.on('change', () => WorkshopForm.checkOpco());
            this.delegateInput.on('change', () => WorkshopForm.checkDelegate());
            this.checkOpco();
            this.checkDelegate();
        },
        checkOpco: function () {
            if (this.opcoInput.is(':checked')) {
                this.opcoPlaceHolder.append(this.opcoTemplate);
            } else {
                this.opcoPlaceHolder.empty();
            }
        },
        checkDelegate: function () {
            if (this.delegateInput.is(':checked')) {
                this.attendeesPlaceHolder.empty();
            } else {
                var addButton = $(this.addAttendeeButton);
                addButton.on('click', () => WorkshopForm.addAttendee());
                this.attendeesPlaceHolder.append(this.attendeeTemplate);
                this.attendeesPlaceHolder.append(addButton);
            }
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