"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockPosts1620366298365 = void 0;
class MockPosts1620366298365 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            queryRunner.query(`insert into post (title, text, "creatorId", "createAt") values ('Quick Change', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

        Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
        
        Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2020-10-28T09:26:20Z');
        insert into post (title, text, "creatorId", "createAt") values ('Orphanage, The (Orfanato, El)', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2020-10-06T03:32:28Z');
        insert into post (title, text, "creatorId", "createAt") values ('Die, Monster, Die!', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
        
        Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
        
        Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2021-03-05T20:14:39Z');
        insert into post (title, text, "creatorId", "createAt") values ('Raid on Rommel', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
        
        Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
        
        Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2020-06-13T17:39:45Z');
        insert into post (title, text, "creatorId", "createAt") values ('My Dear Secretary', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
        
        Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 1, '2020-09-12T11:54:00Z');
        insert into post (title, text, "creatorId", "createAt") values ('Yo Yo (Yoyo)', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        
        Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
        
        Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2021-04-02T01:34:25Z');
        insert into post (title, text, "creatorId", "createAt") values ('Osmosis Jones', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
        
        Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, '2020-08-31T09:33:24Z');
        insert into post (title, text, "creatorId", "createAt") values ('Stupids, The', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2020-08-03T00:03:49Z');
        insert into post (title, text, "creatorId", "createAt") values ('Crack-Up', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2020-11-13T01:35:38Z');
        insert into post (title, text, "creatorId", "createAt") values ('Queen Sized', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
        
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        
        Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2020-12-28T22:36:31Z');
        insert into post (title, text, "creatorId", "createAt") values ('Exodus (Cheut ai kup gei)', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2020-07-20T06:30:17Z');
        insert into post (title, text, "creatorId", "createAt") values ('Good Neighbours (a.k.a. Good Neighbors)', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
        
        Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
        
        Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2020-06-28T06:47:23Z');
        insert into post (title, text, "creatorId", "createAt") values ('Children of the Corn V: Fields of Terror', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
        
        Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
        
        In congue. Etiam justo. Etiam pretium iaculis justo.', 1, '2020-11-01T00:38:01Z');
        insert into post (title, text, "creatorId", "createAt") values ('Infidel, The', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
        
        Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
        
        Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2020-06-04T09:11:07Z');
        insert into post (title, text, "creatorId", "createAt") values ('Raid', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
        
        Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2020-05-23T05:00:07Z');
        insert into post (title, text, "creatorId", "createAt") values ('King of Kings', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
        
        Fusce consequat. Nulla nisl. Nunc nisl.
        
        Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, '2021-03-07T05:42:14Z');
        insert into post (title, text, "creatorId", "createAt") values ('Crac', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
        
        Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
        
        Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2021-04-25T16:57:25Z');
        insert into post (title, text, "creatorId", "createAt") values ('The Girl in a Swing', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
        
        Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2020-10-18T17:06:22Z');
        insert into post (title, text, "creatorId", "createAt") values ('In Bed (En la cama)', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
        
        Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2020-11-20T12:39:50Z');
        insert into post (title, text, "creatorId", "createAt") values ('Pepe', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
        
        Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2020-11-13T08:49:20Z');
        insert into post (title, text, "creatorId", "createAt") values ('Escape to Athena', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2020-11-02T09:55:37Z');
        insert into post (title, text, "creatorId", "createAt") values ('Free Radicals (Böse Zellen)', 'In congue. Etiam justo. Etiam pretium iaculis justo.
        
        In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
        
        Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '2021-01-27T17:57:46Z');
        insert into post (title, text, "creatorId", "createAt") values ('Just a Sigh', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
        
        Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
        
        Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2020-06-01T20:05:53Z');
        insert into post (title, text, "creatorId", "createAt") values ('White Night Wedding (Brúðguminn)', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2021-01-15T16:52:10Z');
        insert into post (title, text, "creatorId", "createAt") values ('Basic', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1, '2021-01-27T21:16:06Z');
        insert into post (title, text, "creatorId", "createAt") values ('Love Potion #9', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
        
        Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2020-08-04T05:28:49Z');
        insert into post (title, text, "creatorId", "createAt") values ('Freedom Writers', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
        
        In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2020-09-04T18:51:43Z');
        insert into post (title, text, "creatorId", "createAt") values ('Ride the Divide', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2020-12-19T19:48:30Z');
        insert into post (title, text, "creatorId", "createAt") values ('Abraham Lincoln', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
        
        Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
        
        Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2020-10-13T08:18:31Z');
        insert into post (title, text, "creatorId", "createAt") values ('Forget me not', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2020-07-23T04:52:01Z');
        insert into post (title, text, "creatorId", "createAt") values ('Under the Age', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
        
        In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2021-03-09T16:37:21Z');
        insert into post (title, text, "creatorId", "createAt") values ('Fish Tank', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2020-12-29T04:49:56Z');
        insert into post (title, text, "creatorId", "createAt") values ('Freakin'' Beautiful World (Sairaan kaunis maailma)', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
        
        In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
        
        Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, '2021-01-03T20:15:55Z');
        insert into post (title, text, "creatorId", "createAt") values ('In Fear', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
        
        Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1, '2020-06-21T01:17:14Z');
        insert into post (title, text, "creatorId", "createAt") values ('Triple Cross', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
        
        Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2021-04-26T21:25:30Z');
        insert into post (title, text, "creatorId", "createAt") values ('Levottomat 3', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
        
        Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, '2021-01-05T04:11:13Z');
        insert into post (title, text, "creatorId", "createAt") values ('RoboCop', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2020-10-20T20:01:44Z');
        insert into post (title, text, "creatorId", "createAt") values ('Jew in the Lotus, The', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
        
        Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
        
        Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2020-08-08T06:39:39Z');
        insert into post (title, text, "creatorId", "createAt") values ('J. Edgar', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
        
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        
        Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2021-01-20T09:08:37Z');
        insert into post (title, text, "creatorId", "createAt") values ('Asfour Stah', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
        
        Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2021-03-07T04:38:28Z');
        insert into post (title, text, "creatorId", "createAt") values ('She No Longer Talks, She Shoots', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
        
        Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
        
        Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2021-02-03T02:48:54Z');
        insert into post (title, text, "creatorId", "createAt") values ('Crac', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, '2020-11-24T15:31:08Z');
        insert into post (title, text, "creatorId", "createAt") values ('Fantastic Four, The', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        
        Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2020-07-26T04:44:27Z');
        insert into post (title, text, "creatorId", "createAt") values ('Bitter Victory', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2020-06-13T22:42:16Z');
        insert into post (title, text, "creatorId", "createAt") values ('Daydreams', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2020-08-12T11:25:07Z');
        insert into post (title, text, "creatorId", "createAt") values ('A Second Chance', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
        
        In congue. Etiam justo. Etiam pretium iaculis justo.', 1, '2020-08-22T17:23:39Z');
        insert into post (title, text, "creatorId", "createAt") values ('Rosemary''s Baby', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
        
        Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2020-10-15T00:43:03Z');
        insert into post (title, text, "creatorId", "createAt") values ('Enola Gay and the Atomic Bombing of Japan', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2021-04-10T12:26:54Z');
        insert into post (title, text, "creatorId", "createAt") values ('Coriolanus', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2020-06-02T03:01:56Z');
        insert into post (title, text, "creatorId", "createAt") values ('The Snow Woman', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2020-06-08T12:52:17Z');
        insert into post (title, text, "creatorId", "createAt") values ('Big Bang in Tunguska (Das Rätsel von Tunguska)', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
        
        Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
        
        Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2020-08-11T10:58:41Z');
        insert into post (title, text, "creatorId", "createAt") values ('Psycho', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
        
        Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
        
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, '2020-05-06T01:39:12Z');
        insert into post (title, text, "creatorId", "createAt") values ('High Wind in Jamaica, A', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
        
        Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2021-04-13T08:04:05Z');
        insert into post (title, text, "creatorId", "createAt") values ('Hearts Divided', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
        
        Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
        
        Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2021-02-09T02:47:14Z');
        insert into post (title, text, "creatorId", "createAt") values ('One 2 Ka 4', 'In congue. Etiam justo. Etiam pretium iaculis justo.
        
        In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2020-05-16T00:35:09Z');
        insert into post (title, text, "creatorId", "createAt") values ('Love Ranch', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
        
        Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1, '2020-08-09T22:03:47Z');
        insert into post (title, text, "creatorId", "createAt") values ('7 Boxes (7 cajas)', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2020-09-08T12:36:12Z');
        insert into post (title, text, "creatorId", "createAt") values ('Motherhood', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1, '2021-02-02T15:13:09Z');
        insert into post (title, text, "creatorId", "createAt") values ('Dead of the Nite', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        
        Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
        
        Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2021-01-09T18:21:19Z');
        insert into post (title, text, "creatorId", "createAt") values ('Me Too (Yo, también)', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
        
        Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
        
        Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2020-06-19T19:01:13Z');
        insert into post (title, text, "creatorId", "createAt") values ('Boyhood', 'Fusce consequat. Nulla nisl. Nunc nisl.
        
        Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, '2020-09-09T09:08:34Z');
        insert into post (title, text, "creatorId", "createAt") values ('Another Me', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2021-03-23T14:08:22Z');
        insert into post (title, text, "creatorId", "createAt") values ('Operation Endgame', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2020-11-28T10:16:04Z');
        insert into post (title, text, "creatorId", "createAt") values ('Goal! III', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
        
        Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2020-10-27T18:47:55Z');
        insert into post (title, text, "creatorId", "createAt") values ('Immortal Story, The (Histoire immortelle)', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '2021-01-04T18:48:18Z');
        insert into post (title, text, "creatorId", "createAt") values ('Finding Forrester', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1, '2020-11-01T18:56:23Z');
        insert into post (title, text, "creatorId", "createAt") values ('Sacco and Vanzetti (Sacco e Vanzetti)', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2021-04-24T22:08:18Z');
        insert into post (title, text, "creatorId", "createAt") values ('Devil''s Backbone, The (Espinazo del diablo, El)', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2020-07-22T01:51:18Z');
        insert into post (title, text, "creatorId", "createAt") values ('River, The', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2021-02-03T16:08:15Z');
        insert into post (title, text, "creatorId", "createAt") values ('Bitter Tea of General Yen, The', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
        
        Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
        
        Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1, '2021-03-22T10:00:00Z');
        insert into post (title, text, "creatorId", "createAt") values ('Friends & Lovers', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
        
        Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2020-09-28T11:19:30Z');
        insert into post (title, text, "creatorId", "createAt") values ('Acapulco, First Beach... To the Left', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
        
        Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
        
        Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, '2020-07-06T19:23:41Z');
        insert into post (title, text, "creatorId", "createAt") values ('Killer Klowns from Outer Space', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
        
        Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2020-08-29T01:29:01Z');
        insert into post (title, text, "creatorId", "createAt") values ('Brigadoon', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2020-05-18T00:43:25Z');
        insert into post (title, text, "creatorId", "createAt") values ('George and the Dragon', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
        
        Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
        
        Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2021-01-28T00:13:23Z');
        insert into post (title, text, "creatorId", "createAt") values ('Baby Boom', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
        
        Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
        
        Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2020-06-26T16:46:28Z');
        insert into post (title, text, "creatorId", "createAt") values ('Protocol', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
        
        Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
        
        Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, '2020-05-15T10:55:15Z');
        insert into post (title, text, "creatorId", "createAt") values ('Tulpan', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, '2020-10-29T01:22:20Z');
        insert into post (title, text, "creatorId", "createAt") values ('Jerky Boys, The', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2020-09-12T07:03:07Z');
        insert into post (title, text, "creatorId", "createAt") values ('Night Catches Us', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2021-01-08T08:22:05Z');
        insert into post (title, text, "creatorId", "createAt") values ('Kim', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
        
        Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        
        Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '2020-12-11T02:38:11Z');
        insert into post (title, text, "creatorId", "createAt") values ('Raid', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
        
        Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
        
        In congue. Etiam justo. Etiam pretium iaculis justo.', 1, '2020-09-20T16:52:01Z');
        insert into post (title, text, "creatorId", "createAt") values ('Black Orpheus (Orfeu Negro)', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
        
        Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2020-12-22T13:15:01Z');
        insert into post (title, text, "creatorId", "createAt") values ('P.S. I Love You', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
        
        Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
        
        Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2021-04-18T10:25:55Z');
        insert into post (title, text, "creatorId", "createAt") values ('Circle of Deception, A', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
        
        Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2021-02-16T04:11:11Z');
        insert into post (title, text, "creatorId", "createAt") values ('Restless (Levottomat)', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
        
        Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
        
        Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2020-07-31T21:29:46Z');
        insert into post (title, text, "creatorId", "createAt") values ('Enough Said', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
        
        Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '2020-11-06T14:39:18Z');
        insert into post (title, text, "creatorId", "createAt") values ('India: Matri Bhumi', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1, '2020-11-07T02:08:38Z');
        insert into post (title, text, "creatorId", "createAt") values ('Show', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2020-05-23T19:46:15Z');
        insert into post (title, text, "creatorId", "createAt") values ('Twilight of the Golds, The', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
        
        Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2021-02-04T23:43:06Z');
        insert into post (title, text, "creatorId", "createAt") values ('Lost in La Mancha', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2021-04-17T01:39:40Z');
        insert into post (title, text, "creatorId", "createAt") values ('Urban Legends: Bloody Mary', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
        
        Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2020-10-03T21:49:01Z');
        insert into post (title, text, "creatorId", "createAt") values ('Blind Fury', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2020-12-06T21:25:00Z');
        insert into post (title, text, "creatorId", "createAt") values ('Shaolin Temple 3: Martial Arts of Shaolin (Nan bei Shao Lin) (Martial Arts of Shaolin)', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2021-02-21T12:24:53Z');
        insert into post (title, text, "creatorId", "createAt") values ('Partners: The Movie II (Aibô: Gekijô-ban II)', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, '2020-09-03T21:20:55Z');
        insert into post (title, text, "creatorId", "createAt") values ('The Lumière Brothers'' First Films', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2020-07-04T22:31:15Z');
        insert into post (title, text, "creatorId", "createAt") values ('My Sister''s Keeper', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
        
        Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
        
        Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2020-05-17T13:58:26Z');
        insert into post (title, text, "creatorId", "createAt") values ('Fat Girl (À ma soeur!)', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2020-09-27T21:44:49Z');
        insert into post (title, text, "creatorId", "createAt") values ('French Connection II', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2020-09-12T01:21:01Z');
        insert into post (title, text, "creatorId", "createAt") values ('Hidden Face, The (La cara oculta)', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        
        Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
        
        Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2020-06-20T09:23:15Z');
        `);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.MockPosts1620366298365 = MockPosts1620366298365;
//# sourceMappingURL=1620366298365-MockPosts.js.map